"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ASessionMsgFactory = void 0;
const types_1 = require("../../types");
class ASessionMsgFactory {
    constructor(description, mutator = null) {
        this.description = description;
        this.mutator = mutator;
    }
    reject(msgType, seqNo, msg, reason) {
        const o = {
            RefMsgType: msgType,
            SessionRejectReason: reason,
            RefSeqNum: seqNo,
            Text: msg
        };
        return this.mutator ? this.mutator(this.description, types_1.MsgType.Reject, o) : o;
    }
    mutate(o, type) {
        return this.mutator ? this.mutator(this.description, type, o) : o;
    }
    testRequest(reqId = `ping-${new Date().toUTCString()}`) {
        const o = {
            TestReqID: reqId
        };
        return this.mutate(o, types_1.MsgType.TestRequest);
    }
    heartbeat(testReqId) {
        const o = {
            TestReqID: testReqId
        };
        return this.mutate(o, types_1.MsgType.Heartbeat);
    }
    resendRequest(from, to) {
        const o = {
            BeginSeqNo: from,
            EndSeqNo: to
        };
        return this.mutate(o, types_1.MsgType.ResendRequest);
    }
    sequenceReset(newSeqNo, gapFill) {
        const o = {
            GapFillFlag: gapFill === true,
            NewSeqNo: newSeqNo
        };
        return this.mutate(o, types_1.MsgType.SequenceReset);
    }
    trailer(checksum) {
        const s = checksum.toString();
        const padded = s.padStart(3, '0');
        const o = {
            CheckSum: padded
        };
        return this.mutate(o, 'StandardTrailer');
    }
}
exports.ASessionMsgFactory = ASessionMsgFactory;
//# sourceMappingURL=a-session-msg-factory.js.map