"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixmlSession = void 0;
const FIXML50SP2_1 = require("../../types/FIXML50SP2");
const types_1 = require("../../types");
const fix_session_1 = require("../session/fix-session");
const session_state_1 = require("../session/session-state");
class FixmlSession extends fix_session_1.FixSession {
    constructor(config) {
        super(config);
        this.config = config;
        this.requestLogoutType = 'UserReq';
        this.requestLogonType = 'UserReq';
        this.respondLogoutType = 'UserRsp';
    }
    onMsg(msgType, view) {
        switch (msgType) {
            case 'UserReq':
            case 'UserRsp': {
                this.onSessionMsg(msgType, view);
                break;
            }
            default: {
                this.checkForwardMsg(msgType, view);
                break;
            }
        }
    }
    onSessionMsg(msgType, view) {
        switch (msgType) {
            case 'UserReq': {
                const reqType = view.getTyped('UserReqTyp');
                switch (reqType) {
                    case FIXML50SP2_1.UserRequestType.LogOnUser: {
                        this.peerLogon(view);
                        break;
                    }
                    case FIXML50SP2_1.UserRequestType.LogOffUser: {
                        this.peerLogout(view);
                        break;
                    }
                }
                break;
            }
            case 'UserRsp': {
                const userStatus = view.getTyped('UserStatus');
                switch (userStatus) {
                    case FIXML50SP2_1.UserStatus.LoggedIn: {
                        this.peerLogon(view);
                        break;
                    }
                    case FIXML50SP2_1.UserStatus.NotLoggedIn: {
                        this.peerLogout(view);
                        break;
                    }
                }
                break;
            }
        }
    }
    peerLogon(view) {
        const logger = this.sessionLogger;
        const state = this.sessionState;
        state.state = session_state_1.SessionState.InitiationLogonReceived;
        state.peerCompId = view.getTyped(types_1.MsgTag.SenderCompID);
        if (this.acceptor) {
            const reqId = view.getString('UserReqID');
            this.send('UserRsp', this.config.factory.logon(reqId, true));
        }
        logger.info(`system ready, inform app`);
        this.onReady(view);
    }
}
exports.FixmlSession = FixmlSession;
//# sourceMappingURL=fixml-session.js.map