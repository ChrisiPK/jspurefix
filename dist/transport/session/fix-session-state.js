"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixSessionState = void 0;
const buffer_1 = require("../../buffer");
const moment = require("moment");
const tick_action_1 = require("../tick-action");
const session_state_1 = require("./session-state");
class FixSessionState {
    constructor({ heartBeat, state = session_state_1.SessionState.Idle, waitLogoutConfirmSeconds = 5, stopSeconds = 2, lastPeerMsgSeqNum = 0 }) {
        this.nextTickAction = tick_action_1.TickAction.Nothing;
        this.lastReceivedAt = null;
        this.LastSentAt = null;
        this.lastTestRequestAt = null;
        this.logoutSentAt = null;
        this.now = new Date();
        this.compId = '';
        this.peerCompId = '';
        this.peerHeartBeatSecs = 0;
        this.secondsSinceLogoutSent = -1;
        this.secondsSinceSent = -1;
        this.secondsSinceReceive = -1;
        this.heartBeat = heartBeat;
        this.state = state;
        this.waitLogoutConfirmSeconds = waitLogoutConfirmSeconds;
        this.stopSeconds = stopSeconds;
        this.lastPeerMsgSeqNum = lastPeerMsgSeqNum;
    }
    reset(resetSeqNo) {
        this.lastReceivedAt = null;
        this.LastSentAt = null;
        this.lastTestRequestAt = null;
        this.secondsSinceLogoutSent = -1;
        this.secondsSinceSent = -1;
        this.secondsSinceReceive = -1;
        this.peerHeartBeatSecs = 0;
        this.logoutSentAt = null;
        this.nextTickAction = tick_action_1.TickAction.Nothing;
        if (resetSeqNo) {
            this.lastPeerMsgSeqNum = 0;
        }
    }
    static dateAsString(d) {
        if (!d) {
            return 'null';
        }
        return moment(d).format('HH:mm:ss.SSS');
    }
    toString() {
        const buffer = new buffer_1.ElasticBuffer(1024);
        buffer.writeString(`compId = ${this.compId}, `);
        buffer.writeString(`heartBeat = ${this.heartBeat}, `);
        buffer.writeString(`state = ${session_state_1.SessionState[this.state]} (${this.state}), `);
        buffer.writeString(`nextTickAction = ${tick_action_1.TickAction[this.nextTickAction]} (${this.nextTickAction}), `);
        buffer.writeString(`now = ${FixSessionState.dateAsString(this.now)}, `);
        buffer.writeString(`timeToDie = ${this.timeToDie()}, `);
        buffer.writeString(`timeToHeartbeat = ${this.timeToHeartbeat()}, `);
        buffer.writeString(`timeToTerminate = ${this.timeToTerminate()}, `);
        buffer.writeString(`timeToTestRequest = ${this.timeToTestRequest()}, `);
        buffer.writeString(`lastReceivedAt = ${FixSessionState.dateAsString(this.lastReceivedAt)}, `);
        buffer.writeString(`LastSentAt = ${FixSessionState.dateAsString(this.LastSentAt)}, `);
        buffer.writeString(`lastTestRequestAt = ${FixSessionState.dateAsString(this.lastTestRequestAt)}, `);
        buffer.writeString(`logoutSentAt = ${FixSessionState.dateAsString(this.logoutSentAt)}, `);
        buffer.writeString(`peerHeartBeatSecs = ${this.peerHeartBeatSecs}, `);
        buffer.writeString(`peerCompId = ${this.peerCompId}, `);
        buffer.writeString(`lastPeerMsgSeqNum = ${this.lastPeerMsgSeqNum}, `);
        buffer.writeString(`secondsSinceLogoutSent = ${this.secondsSinceLogoutSent}, `);
        buffer.writeString(`secondsSinceSent = ${this.secondsSinceSent}, `);
        buffer.writeString(`secondsSinceReceive = ${this.secondsSinceReceive}`);
        return buffer.toString();
    }
    calcAction(now) {
        this.now = now;
        this.calcState();
        switch (this.state) {
            case session_state_1.SessionState.PeerLogonRejected: {
                if (this.secondsSinceSent >= this.stopSeconds) {
                    this.nextTickAction = tick_action_1.TickAction.Stop;
                }
                break;
            }
            case session_state_1.SessionState.WaitingLogoutConfirm:
            case session_state_1.SessionState.ConfirmingLogout: {
                if (this.timeToDie()) {
                    this.nextTickAction = tick_action_1.TickAction.Stop;
                }
                break;
            }
            case session_state_1.SessionState.ActiveNormalSession:
            case session_state_1.SessionState.AwaitingProcessingResponseToTestRequest:
            case session_state_1.SessionState.InitiationLogonReceived:
            case session_state_1.SessionState.InitiationLogonResponse: {
                if (this.timeToHeartbeat()) {
                    this.nextTickAction = tick_action_1.TickAction.Heartbeat;
                }
                else {
                    if (this.timeToTerminate()) {
                        this.nextTickAction = tick_action_1.TickAction.TerminateOnError;
                    }
                    else if (this.timeToTestRequest()) {
                        if (!this.lastTestRequestAt) {
                            this.nextTickAction = tick_action_1.TickAction.TestRequest;
                            this.lastTestRequestAt = this.now;
                        }
                    }
                }
                break;
            }
        }
        return this.nextTickAction;
    }
    timeToDie() {
        return this.secondsSinceLogoutSent > this.waitLogoutConfirmSeconds ||
            this.secondsSinceLogoutSent > this.stopSeconds;
    }
    timeToHeartbeat() {
        return this.secondsSinceSent >= this.heartBeat;
    }
    timeToTerminate() {
        return this.secondsSinceReceive >= 2.5 * this.peerHeartBeatSecs;
    }
    timeToTestRequest() {
        return this.secondsSinceReceive >= 1.5 * this.peerHeartBeatSecs;
    }
    calcState() {
        const time = this.now.getTime();
        this.nextTickAction = tick_action_1.TickAction.Nothing;
        this.secondsSinceLogoutSent = this.logoutSentAt ? (time - this.logoutSentAt.getTime()) / 1000 : -1;
        this.secondsSinceSent = (time - this.LastSentAt.getTime()) / 1000;
        this.secondsSinceReceive = (time - this.lastReceivedAt.getTime()) / 1000;
    }
}
exports.FixSessionState = FixSessionState;
//# sourceMappingURL=fix-session-state.js.map