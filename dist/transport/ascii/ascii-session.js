"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsciiSession = void 0;
const types_1 = require("../../types");
const fix_session_1 = require("../session/fix-session");
const store_1 = require("../../store");
const tcp_1 = require("../tcp");
const tick_action_1 = require("../tick-action");
const segment_type_1 = require("../../buffer/segment/segment-type");
class AsciiSession extends fix_session_1.FixSession {
    constructor(config) {
        super(config);
        this.config = config;
        this.heartbeat = true;
        this.store = null;
        this.requestLogoutType = this.respondLogoutType = types_1.MsgType.Logout;
        this.requestLogonType = types_1.MsgType.Logon;
        this.store = new store_1.FixMsgMemoryStore(this.config.description.SenderCompId, this.config);
        this.resender = new store_1.FixMsgAsciiStoreResend(this.store, this.config);
    }
    checkSeqNo(msgType, view) {
        switch (msgType) {
            case types_1.MsgType.SequenceReset: {
                return true;
            }
            default: {
                const state = this.sessionState;
                const lastSeq = state.lastPeerMsgSeqNum;
                const seqNo = view.getTyped(types_1.MsgTag.MsgSeqNum);
                let ret = false;
                const seqDelta = seqNo - lastSeq;
                if (seqDelta <= 0) {
                    this.sessionLogger.warning(`terminate as seqDelta (${seqDelta}) < 0 lastSeq = ${lastSeq} seqNo = ${seqNo}`);
                    this.stop();
                }
                else if (seqDelta > 1) {
                    if (msgType === types_1.MsgType.Logon) {
                        this.peerLogon(view);
                    }
                    if (msgType === types_1.MsgType.ResendRequest) {
                        this.onResendRequest(view);
                    }
                    this.sendResendRequest(lastSeq, seqNo);
                }
                else {
                    ret = true;
                    state.lastPeerMsgSeqNum = seqNo;
                }
                return ret;
            }
        }
    }
    checkForwardMsg(msgType, view) {
        const okToForward = this.validStateApplicationMsg();
        if (okToForward) {
            this.sessionLogger.info(`ascii forwarding msgType = '${msgType}' to application`);
            this.setState(tcp_1.SessionState.ActiveNormalSession);
            this.onApplicationMsg(msgType, view);
        }
        else {
            this.terminate(new Error(`msgType ${msgType} received in state ${this.stateString()}`));
        }
    }
    sendReject(msgType, seqNo, msg, reason) {
        const factory = this.config.factory;
        const reject = factory.reject(msgType, seqNo, msg, reason);
        this.sessionLogger.warning(`rejecting with ${JSON.stringify(reject)}`);
        this.send(types_1.MsgType.Reject, reject);
    }
    sendResendRequest(lastSeq, receivedSeq) {
        const resend = this.config.factory.resendRequest(lastSeq + 1, 0);
        this.sessionLogger.warning(`received seq ${receivedSeq}, but last known seq is ${lastSeq}. Sending resend request for all messages > ${lastSeq}`);
        this.send(types_1.MsgType.ResendRequest, resend);
    }
    checkIntegrity(msgType, view) {
        const state = this.sessionState;
        const seqNum = view.getTyped(types_1.MsgTag.MsgSeqNum);
        const received = parseInt(view.getString(types_1.MsgTag.CheckSum), 10);
        const computed = view.checksum();
        if (received !== computed) {
            const msg = `msgType ${msgType} checksum failed. received = ${received} computed = ${computed}`;
            this.sendReject(msgType, seqNum, msg, types_1.SessionRejectReason.ValueIsIncorrect);
            return false;
        }
        if (view.segment.type === segment_type_1.SegmentType.Unknown) {
            const msg = `msgType ${msgType} unknown`;
            this.sendReject(msgType, seqNum, msg, types_1.SessionRejectReason.InvalidMsgType);
            return false;
        }
        const invalid = view.invalid();
        if (invalid.length > 0) {
            const msg = `msgType ${msgType} invalid tag${invalid.length > 1 ? 's' : ''} ${invalid.join(', ')}`;
            this.sendReject(msgType, seqNum, msg, types_1.SessionRejectReason.InvalidTagNumber);
            return false;
        }
        const undefinedMsg = view.undefinedForMsg();
        if (undefinedMsg) {
            const msg = `msgType ${msgType} ${undefinedMsg}`;
            this.sendReject(msgType, seqNum, msg, types_1.SessionRejectReason.TagNotDefinedForThisMessageType);
            return false;
        }
        const missingRequired = view.missing();
        if (missingRequired.length > 0) {
            const msg = `msgType ${msgType} missing required tag${missingRequired.length > 1 ? 's' : ''} ${missingRequired.join(', ')}`;
            this.sendReject(msgType, seqNum, msg, types_1.SessionRejectReason.RequiredTagMissing);
            return false;
        }
        switch (state.state) {
            case tcp_1.SessionState.InitiationLogonReceived:
            case tcp_1.SessionState.InitiationLogonResponse:
                {
                    const targetCompId = view.getString(types_1.MsgTag.TargetCompID);
                    if (targetCompId !== state.compId) {
                        const msg = `msgType ${msgType} unexpected TargetCompID ${targetCompId} expecting ${state.compId})`;
                        this.sendReject(msgType, seqNum, msg, types_1.SessionRejectReason.CompIDProblem);
                        return false;
                    }
                    const peerCompId = view.getString(types_1.MsgTag.SenderCompID);
                    if (peerCompId !== state.peerCompId) {
                        const msg = `msgType ${msgType} unexpected SenderCompID ${peerCompId}  expecting ${state.compId}`;
                        this.sendReject(msgType, seqNum, msg, types_1.SessionRejectReason.CompIDProblem);
                        return false;
                    }
                }
                break;
            default: {
                break;
            }
        }
        return true;
    }
    onResendRequest(view) {
        this.setState(tcp_1.SessionState.HandleResendRequest);
        const [beginSeqNo, endSeqNo] = view.getTypedTags([types_1.MsgTag.BeginSeqNo, types_1.MsgTag.EndSeqNo]);
        this.sessionLogger.info(`onResendRequest getResendRequest beginSeqNo = ${beginSeqNo}, endSeqNo = ${endSeqNo}`);
        this.resender.getResendRequest(beginSeqNo, endSeqNo).then((records) => {
            const validRecords = records.filter(rec => rec.obj !== null);
            this.sessionLogger.info(`sending ${validRecords.length}`);
            validRecords.forEach(rec => {
                this.send(rec.msgType, rec.obj);
            });
            this.setState(tcp_1.SessionState.ActiveNormalSession);
        }).catch(e => {
            this.sessionLogger.error(e);
        });
    }
    okForLogon() {
        const state = this.sessionState.state;
        if (this.acceptor) {
            return state === tcp_1.SessionState.WaitingForALogon;
        }
        return state === tcp_1.SessionState.InitiationLogonSent;
    }
    onSessionMsg(msgType, view) {
        const logger = this.sessionLogger;
        switch (msgType) {
            case types_1.MsgType.Logon: {
                if (this.okForLogon()) {
                    this.peerLogon(view);
                }
                else {
                    this.terminate(new Error(`state ${this.stateString()} is illegal for Logon`));
                }
                break;
            }
            case types_1.MsgType.Logout: {
                this.peerLogout(view);
                break;
            }
            case types_1.MsgType.TestRequest: {
                const req = view.getString(types_1.MsgTag.TestReqID);
                this.sendHeartbeat(req);
                break;
            }
            case types_1.MsgType.Heartbeat: {
                this.sessionState.lastTestRequestAt = null;
                this.setState(tcp_1.SessionState.ActiveNormalSession);
                break;
            }
            case types_1.MsgType.ResendRequest: {
                logger.info(`peer sends '${msgType}' resend request.`);
                this.onResendRequest(view);
                break;
            }
            case types_1.MsgType.SequenceReset: {
                const newSeqNo = view.getTyped(types_1.MsgTag.NewSeqNo);
                logger.info(`peer sends '${msgType}' sequence reset. newSeqNo = ${newSeqNo}`);
                this.sessionState.lastPeerMsgSeqNum = newSeqNo - 1;
                break;
            }
            case types_1.MsgType.Reject: {
                logger.info(`peer rejects type '${msgType}' with text '${view.getTyped(types_1.MsgTag.Text)}'`);
                break;
            }
        }
    }
    onMsg(msgType, view) {
        if (!this.checkSeqNo(msgType, view)) {
            this.sessionLogger.info(`message '${msgType}' failed checkSeqNo.`);
            return;
        }
        if (this.checkMsgIntegrity && !this.checkIntegrity(msgType, view)) {
            this.sessionLogger.info(`message '${msgType}' failed checkIntegrity.`);
            switch (msgType) {
                case types_1.MsgType.Logon: {
                    this.setState(tcp_1.SessionState.PeerLogonRejected);
                    this.startTimer();
                    break;
                }
            }
            return;
        }
        switch (msgType) {
            case types_1.MsgType.Logon:
            case types_1.MsgType.Logout:
            case types_1.MsgType.TestRequest:
            case types_1.MsgType.Reject:
            case types_1.MsgType.SequenceReset:
            case types_1.MsgType.Heartbeat:
            case types_1.MsgType.ResendRequest: {
                this.onSessionMsg(msgType, view);
                break;
            }
            default: {
                this.checkForwardMsg(msgType, view);
                break;
            }
        }
    }
    startTimer(interval = 200) {
        this.timer = setInterval(() => {
            this.tick();
        }, interval);
    }
    peerLogon(view) {
        const logger = this.sessionLogger;
        const [heartBtInt, peerCompId, userName, password] = view.getTypedTags([types_1.MsgTag.HeartBtInt, types_1.MsgTag.SenderCompID, types_1.MsgTag.Username, types_1.MsgTag.Password]);
        logger.info(`peerLogon Username = ${userName}, heartBtInt = ${heartBtInt}, peerCompId = ${peerCompId}, userName = ${userName}`);
        const state = this.sessionState;
        state.peerHeartBeatSecs = view.getTyped(types_1.MsgTag.HeartBtInt);
        state.peerCompId = view.getTyped(types_1.MsgTag.SenderCompID);
        const res = this.onLogon(view, userName, password);
        logger.info(`peerLogon onLogon returns ${res}`);
        if (this.acceptor) {
            this.setState(tcp_1.SessionState.InitiationLogonResponse);
            logger.info('acceptor responds to logon request');
            this.sendLogon();
        }
        else {
            logger.info('initiator receives logon response');
            this.setState(tcp_1.SessionState.InitiationLogonReceived);
        }
        if (this.heartbeat) {
            logger.debug(`start heartbeat timer.`);
            this.startTimer();
        }
        logger.info(`system ready, inform app`);
        this.onReady(view);
    }
    sendTestRequest() {
        const factory = this.config.factory;
        this.setState(tcp_1.SessionState.AwaitingProcessingResponseToTestRequest);
        this.send(types_1.MsgType.TestRequest, factory.testRequest());
    }
    sendHeartbeat(testReqId) {
        const factory = this.config.factory;
        this.send(types_1.MsgType.Heartbeat, factory.heartbeat(testReqId));
    }
    tick() {
        if (!this.transport)
            return;
        const sessionState = this.sessionState;
        const action = sessionState.calcAction(new Date());
        const application = this.transport.config.description.application;
        const logger = this.sessionLogger;
        switch (action) {
            case tick_action_1.TickAction.Nothing: {
                break;
            }
            case tick_action_1.TickAction.TestRequest: {
                logger.debug(`send test req. state = ${sessionState.toString()}`);
                this.sendTestRequest();
                break;
            }
            case tick_action_1.TickAction.Heartbeat: {
                logger.debug(`send heartbeat. state = ${sessionState.toString()}`);
                this.sendHeartbeat(sessionState.now.toUTCString());
                break;
            }
            case tick_action_1.TickAction.TerminateOnError: {
                logger.info(sessionState.toString());
                this.terminate(new Error(`${application.name}: peer not responding`));
                break;
            }
            case tick_action_1.TickAction.Stop: {
                logger.info(sessionState.toString());
                logger.info('stopping');
                this.stop();
                break;
            }
            default:
                throw new Error(`unexpected action`);
        }
    }
}
exports.AsciiSession = AsciiSession;
//# sourceMappingURL=ascii-session.js.map