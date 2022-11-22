"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionMsgFactory = exports.AsciiSessionMsgFactory = void 0;
const types_1 = require("../../types");
const a_session_msg_factory_1 = require("../session/a-session-msg-factory");
const repo_1 = require("../../types/FIX4.4/repo");
class AsciiSessionMsgFactory extends a_session_msg_factory_1.ASessionMsgFactory {
    constructor(description, mutator = null) {
        super(description, mutator);
        this.description = description;
        this.isAscii = description.application.protocol === 'ascii';
    }
    logon() {
        const description = this.description;
        const o = {
            Username: description.Username,
            Password: description.Password,
            HeartBtInt: description.HeartBtInt,
            ResetSeqNumFlag: description.ResetSeqNumFlag,
            EncryptMethod: repo_1.EncryptMethod.None
        };
        return this.mutate(o, types_1.MsgType.Logon);
    }
    logout(text) {
        const o = {
            Text: text
        };
        return this.mutate(o, types_1.MsgType.Logout);
    }
    header(msgType, seqNum, time, overrideData) {
        const description = this.description;
        const bodyLength = Math.max(4, description.BodyLengthChars || 7);
        const placeHolder = Math.pow(10, bodyLength - 1) + 1;
        const o = Object.assign({ BeginString: description.BeginString, BodyLength: placeHolder, MsgType: msgType, SenderCompID: description.SenderCompId, MsgSeqNum: seqNum, SendingTime: time, TargetCompID: description.TargetCompID, TargetSubID: description.TargetSubID }, overrideData);
        return this.mutate(o, 'StandardHeader');
    }
}
exports.AsciiSessionMsgFactory = AsciiSessionMsgFactory;
class SessionMsgFactory extends AsciiSessionMsgFactory {
    constructor(description, mutator = null) {
        super(description, mutator);
        this.description = description;
        this.mutator = mutator;
    }
}
exports.SessionMsgFactory = SessionMsgFactory;
//# sourceMappingURL=ascii-session-msg-factory.js.map