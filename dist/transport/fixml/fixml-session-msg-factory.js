"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixmlSessionMsgFactory = void 0;
const types_1 = require("../../types");
const a_session_msg_factory_1 = require("../session/a-session-msg-factory");
const FIXML50SP2_1 = require("../../types/FIXML50SP2");
class FixmlSessionMsgFactory extends a_session_msg_factory_1.ASessionMsgFactory {
    constructor(description, mutator = null) {
        super(description, mutator);
        this.description = description;
    }
    logon(userRequestId = '', isResponse = false) {
        return this.fixmlLogon(userRequestId, isResponse);
    }
    logout(msgType, text) {
        return this.fixmlLogout(msgType, msgType !== 'UserReq');
    }
    header(msgType, seqNum = 0, time = new Date(), overrideData) {
        const description = this.description;
        const o = {
            SenderCompID: description.SenderCompId,
            TargetCompID: description.TargetCompID,
            SenderSubID: description.SenderSubID,
            TargetSubID: description.TargetSubID
        };
        return this.mutate(o, 'StandardHeader');
    }
    fixmlLogon(userRequestId, isResponse) {
        const description = this.description;
        if (!isResponse) {
            const o = {
                Username: description.Username,
                Password: description.Password,
                UserRequestID: userRequestId,
                UserRequestType: FIXML50SP2_1.UserRequestType.LogOnUser
            };
            return this.mutate(o, types_1.MsgType.Logon);
        }
        else {
            const o = {
                Username: description.Username,
                UserRequestID: userRequestId,
                UserStatus: FIXML50SP2_1.UserStatus.LoggedIn
            };
            return this.mutate(o, types_1.MsgType.Logon);
        }
    }
    fixmlLogout(userRequestId, isResponse) {
        if (!isResponse) {
            const o = {
                Username: this.description.Username,
                UserRequestID: userRequestId,
                UserRequestType: FIXML50SP2_1.UserRequestType.LogOffUser
            };
            return this.mutate(o, types_1.MsgType.Logout);
        }
        else {
            const o = {
                Username: this.description.Username,
                UserRequestID: userRequestId,
                UserStatus: FIXML50SP2_1.UserStatus.NotLoggedIn
            };
            return this.mutate(o, types_1.MsgType.Logout);
        }
    }
}
exports.FixmlSessionMsgFactory = FixmlSessionMsgFactory;
//# sourceMappingURL=fixml-session-msg-factory.js.map