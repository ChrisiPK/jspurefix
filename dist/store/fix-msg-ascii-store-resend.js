"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixMsgAsciiStoreResend = void 0;
const fix_msg_store_record_1 = require("./fix-msg-store-record");
const types_1 = require("../types");
const buffer_1 = require("../buffer");
const ascii_1 = require("../buffer/ascii");
class FixMsgAsciiStoreResend {
    constructor(store, config) {
        this.store = store;
        this.config = config;
        this.parser = new ascii_1.AsciiParser(this.config, null, new buffer_1.ElasticBuffer(160 * 1024));
    }
    getResendRequest(startSeq, endSeq) {
        return new Promise((resolve, reject) => {
            this.store.getSeqNumRange(startSeq, endSeq).then(res => {
                resolve(this.inflateRange(startSeq, endSeq, res));
            }).catch(e => {
                reject(e);
            });
        });
    }
    inflateRange(startSeq, endSeq, input) {
        const toResend = [];
        let expected = startSeq;
        for (let i = 0; i < input.length; ++i) {
            const record = input[i].clone();
            const seqNum = record.seqNum;
            const toGap = seqNum - expected;
            if (toGap > 0) {
                this.gap(expected, seqNum, toResend);
            }
            expected = seqNum + 1;
            if (record.encoded) {
                this.inflate(record);
            }
            toResend.push(record);
        }
        if (endSeq - expected > 0) {
            this.gap(expected, endSeq + 1, toResend);
        }
        return toResend;
    }
    gap(beginGap, seqNum, arr) {
        if (beginGap > 0) {
            arr.push(this.sequenceResetGap(beginGap, seqNum));
        }
    }
    inflate(record) {
        if (record.obj)
            return;
        if (!record.encoded)
            return;
        const parser = this.parser;
        parser.on('error', (e) => {
            record.obj = null;
        });
        parser.on('msg', (view) => {
            record.obj = view.toObject();
        });
        parser.parseText(record.encoded);
    }
    sequenceResetGap(startGap, newSeq) {
        const factory = this.config.factory;
        const gapFill = factory.sequenceReset(newSeq, true);
        gapFill.StandardHeader = factory.header(types_1.MsgType.SequenceReset, startGap);
        gapFill.StandardHeader.PossDupFlag = true;
        gapFill.NewSeqNo = newSeq;
        return new fix_msg_store_record_1.FixMsgStoreRecord(types_1.MsgType.SequenceReset, new Date(), newSeq, gapFill, null);
    }
}
exports.FixMsgAsciiStoreResend = FixMsgAsciiStoreResend;
//# sourceMappingURL=fix-msg-ascii-store-resend.js.map