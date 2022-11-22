"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixSession = void 0;
const fix_session_state_1 = require("./fix-session-state");
const types_1 = require("../../types");
const events = require("events");
const session_state_1 = require("./session-state");
const segment_type_1 = require("../../buffer/segment/segment-type");
class FixSession extends events.EventEmitter {
    constructor(config) {
        super();
        this.config = config;
        this.logReceivedMsgs = false;
        this.timer = null;
        this.transport = null;
        this.manageSession = true;
        this.checkMsgIntegrity = false;
        const description = config.description;
        this.me = description.application.name;
        this.sessionState = new fix_session_state_1.FixSessionState({ heartBeat: config.description.HeartBtInt,
            lastPeerMsgSeqNum: config.description.LastReceivedSeqNum });
        this.sessionLogger = config.logFactory.logger(`${this.me}:FixSession`);
        this.initiator = description.application.type === 'initiator';
        this.acceptor = !this.initiator;
        this.checkMsgIntegrity = this.acceptor;
        this.sessionState.compId = description.SenderCompId;
    }
    setState(state) {
        if (state === this.sessionState.state)
            return;
        const logger = this.sessionLogger;
        const prevState = this.sessionState.state;
        const msg = `current state ${session_state_1.SessionState[prevState]} (${prevState}) moves to ${session_state_1.SessionState[state]} (${state})`;
        logger.info(msg);
        this.sessionState.state = state;
    }
    getState() {
        return this.sessionState.state;
    }
    sendLogon() {
        this.send(this.requestLogonType, this.config.factory.logon());
    }
    waitPromise() {
        const logger = this.sessionLogger;
        return new Promise((accept, reject) => {
            if (this.initiator) {
                logger.debug(`initiator sending logon state = ${this.stateString()}`);
                this.sendLogon();
                this.setState(session_state_1.SessionState.InitiationLogonSent);
            }
            else {
                logger.debug(`acceptor waits for logon state = ${this.stateString()}`);
                this.setState(session_state_1.SessionState.WaitingForALogon);
            }
            this.on('error', (e) => {
                logger.error(e);
                reject(e);
            });
            this.on('done', () => {
                accept(this.transport.id);
            });
        });
    }
    run(transport) {
        const logger = this.sessionLogger;
        if (this.transport) {
            logger.info(`reset from previous transport. state ${this.stateString()}`);
            this.reset();
        }
        this.transport = transport;
        this.subscribe();
        return this.waitPromise();
    }
    expectedState() {
        switch (this.sessionState.state) {
            case session_state_1.SessionState.ActiveNormalSession:
            case session_state_1.SessionState.ReceiveLogout:
            case session_state_1.SessionState.Stopped:
            case session_state_1.SessionState.ConfirmingLogout:
            case session_state_1.SessionState.HandleResendRequest:
            case session_state_1.SessionState.AwaitingProcessingResponseToTestRequest:
            case session_state_1.SessionState.AwaitingProcessingResponseToResendRequest:
                return true;
            default:
                return false;
        }
    }
    subscribe() {
        const transport = this.transport;
        const logger = this.sessionLogger;
        const rx = transport.receiver;
        const tx = transport.transmitter;
        rx.on('msg', (msgType, view) => {
            if (this.logReceivedMsgs) {
                const name = view.segment.type !== segment_type_1.SegmentType.Unknown ? view.segment.set.name : 'unknown';
                logger.info(`${msgType}: ${name}`);
                logger.info(`${view.toString()}`);
            }
            this.sessionState.lastReceivedAt = new Date();
            if (this.manageSession) {
                this.onMsg(msgType, view);
            }
            else {
                this.checkForwardMsg(msgType, view);
            }
        });
        rx.on('error', (e) => {
            logger.warning(`rx error event: ${e.message} ${e.stack || ''}`);
            this.terminate(e);
        });
        rx.on('done', () => {
            logger.info('rx done received');
            this.done();
        });
        rx.on('end', () => {
            logger.info(`rx end received sessionState = [${this.sessionState.toString()}]`);
            const expectedState = this.expectedState();
            if (expectedState) {
                logger.info(`rx graceful end state = ${this.stateString()}`);
                this.done();
            }
            else {
                const e = new Error(`unexpected state - transport failed? = ${this.stateString()}`);
                logger.info(`rx error ${e.message}`);
                this.terminate(e);
            }
        });
        rx.on('decoded', (msgType, data, ptr) => {
            logger.debug(`rx: [${msgType}] ${ptr} bytes`);
            this.onDecoded(msgType, data.toString(ptr));
        });
        tx.on('error', (e) => {
            logger.warning(`tx error event: ${e.message} ${e.stack || ''}`);
            this.terminate(e);
        });
        tx.on('encoded', (msgType, data) => {
            logger.debug(`tx: [${msgType}] ${data.length} bytes`);
            this.onEncoded(msgType, data);
        });
    }
    validStateApplicationMsg() {
        switch (this.sessionState.state) {
            case session_state_1.SessionState.Idle:
            case session_state_1.SessionState.InitiateConnection:
            case session_state_1.SessionState.InitiationLogonSent:
            case session_state_1.SessionState.WaitingForALogon:
            case session_state_1.SessionState.HandleResendRequest:
            case session_state_1.SessionState.AwaitingProcessingResponseToTestRequest:
            case session_state_1.SessionState.AwaitingProcessingResponseToResendRequest:
                return false;
            default:
                return true;
        }
    }
    stateString() {
        return session_state_1.SessionState[this.sessionState.state];
    }
    checkForwardMsg(msgType, view) {
        this.sessionLogger.info(`forwarding msgType = '${msgType}' to application`);
        this.setState(session_state_1.SessionState.ActiveNormalSession);
        this.onApplicationMsg(msgType, view);
    }
    terminate(error) {
        if (this.sessionState.state === session_state_1.SessionState.Stopped)
            return;
        this.sessionLogger.error(error);
        if (this.timer) {
            clearInterval(this.timer);
        }
        if (this.transport) {
            this.transport.end();
        }
        this.transport = null;
        this.setState(session_state_1.SessionState.Stopped);
        this.emit('error', error);
    }
    peerLogout(view) {
        const msg = view.getString(types_1.MsgTag.Text);
        const state = this.sessionState.state;
        switch (state) {
            case session_state_1.SessionState.WaitingLogoutConfirm: {
                this.sessionLogger.info(`peer confirms logout Text = '${msg}'`);
                this.stop();
                break;
            }
            case session_state_1.SessionState.InitiationLogonResponse:
            case session_state_1.SessionState.ActiveNormalSession:
            case session_state_1.SessionState.InitiationLogonReceived: {
                this.setState(session_state_1.SessionState.ConfirmingLogout);
                this.sessionLogger.info(`peer initiates logout Text = '${msg}'`);
                this.sessionLogout();
            }
        }
    }
    send(msgType, obj) {
        const state = this.sessionState.state;
        switch (state) {
            case session_state_1.SessionState.Stopped: {
                this.sessionLogger.warning(`can't send in state ${this.stateString()}`);
                break;
            }
            default: {
                this.sessionState.LastSentAt = new Date();
                this.transport.transmitter.send(msgType, obj);
                break;
            }
        }
    }
    sendLogout(msg) {
        const factory = this.config.factory;
        this.sessionLogger.info(`sending logout with ${msg}`);
        this.send(this.requestLogoutType, factory.logout(this.requestLogoutType, msg));
    }
    sessionLogout() {
        const sessionState = this.sessionState;
        if (sessionState.logoutSentAt) {
            return;
        }
        switch (sessionState.state) {
            case session_state_1.SessionState.ActiveNormalSession:
            case session_state_1.SessionState.InitiationLogonResponse:
            case session_state_1.SessionState.InitiationLogonReceived: {
                this.setState(session_state_1.SessionState.WaitingLogoutConfirm);
                sessionState.logoutSentAt = new Date();
                const msg = `${this.me} initiate logout`;
                this.sessionLogger.info(msg);
                this.sendLogout(msg);
                break;
            }
            case session_state_1.SessionState.ConfirmingLogout: {
                sessionState.logoutSentAt = new Date();
                const msg = `${this.me} confirming logout`;
                this.sessionLogger.info(msg);
                this.sendLogout(msg);
                break;
            }
            default: {
                this.sessionLogger.info(`sessionLogout ignored as in state ${sessionState.state}`);
            }
        }
    }
    done() {
        switch (this.sessionState.state) {
            case session_state_1.SessionState.InitiationLogonResponse:
            case session_state_1.SessionState.ActiveNormalSession:
            case session_state_1.SessionState.InitiationLogonReceived: {
                this.sessionLogout();
                break;
            }
            case session_state_1.SessionState.Stopped:
                this.sessionLogger.info(`done. session is now stopped`);
                break;
            default: {
                this.stop();
                break;
            }
        }
        this.sessionLogger.info(`done. check logout sequence state ${this.stateString()}`);
    }
    reset() {
        if (this.timer) {
            clearInterval(this.timer);
        }
        this.transport = null;
        const resetSeqNum = this.config.description.ResetSeqNumFlag || true;
        this.sessionState.reset(resetSeqNum);
        this.setState(session_state_1.SessionState.NetworkConnectionEstablished);
    }
    stop(error = null) {
        if (this.sessionState.state === session_state_1.SessionState.Stopped) {
            return;
        }
        if (this.timer) {
            clearInterval(this.timer);
        }
        this.sessionLogger.info(`stop: kill transport`);
        this.transport.end();
        if (error) {
            this.sessionLogger.info(`stop: emit error ${error.message}`);
            this.emit('error', error);
        }
        else {
            this.emit('done');
        }
        this.setState(session_state_1.SessionState.Stopped);
        this.onStopped(error);
        this.transport = null;
    }
}
exports.FixSession = FixSession;
//# sourceMappingURL=fix-session.js.map