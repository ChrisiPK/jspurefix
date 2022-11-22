"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixMsgStoreRecord = void 0;
const types_1 = require("../types");
class FixMsgStoreRecord {
    constructor(msgType, timestamp, seqNum, obj, encoded) {
        this.msgType = msgType;
        this.timestamp = timestamp;
        this.seqNum = seqNum;
        this.obj = obj;
        this.encoded = encoded;
    }
    static toMsgStoreRecord(v) {
        return new FixMsgStoreRecord(v.getString(types_1.MsgTag.MsgType), v.getTyped(types_1.MsgTag.SendingTime), v.getTyped(types_1.MsgTag.MsgSeqNum), v.toObject());
    }
    clone() {
        return new FixMsgStoreRecord(this.msgType, this.timestamp, this.seqNum, this.obj, this.encoded);
    }
}
exports.FixMsgStoreRecord = FixMsgStoreRecord;
//# sourceMappingURL=fix-msg-store-record.js.map