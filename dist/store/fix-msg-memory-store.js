"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixMsgMemoryStore = void 0;
const collections_1 = require("../collections");
const types_1 = require("../types");
class FixMsgMemoryStore {
    constructor(id, config) {
        this.id = id;
        this.config = config;
        this.heartbeat = true;
        this.sortedBySeqNum = [];
        this.excluded = new collections_1.Dictionary();
        this.length = 0;
        this.sessionMessages = [
            types_1.MsgType.Logon,
            types_1.MsgType.Logout,
            types_1.MsgType.ResendRequest,
            types_1.MsgType.Heartbeat,
            types_1.MsgType.TestRequest,
            types_1.MsgType.SequenceReset
        ];
        this.logger = config.logFactory.logger(`${this.id}:FixMsgMemoryStore`);
        this.setExcMsgType([]);
    }
    static search(ar, target, isDate) {
        let m = 0;
        let n = ar.length - 1;
        while (m <= n) {
            const k = (n + m) >> 1;
            const check = isDate ? ar[k].timestamp.getDate() : ar[k].seqNum;
            const cmp = target - check;
            if (cmp > 0) {
                m = k + 1;
            }
            else if (cmp < 0) {
                n = k - 1;
            }
            else {
                return k;
            }
        }
        return -m - 1;
    }
    getMsgType(msgType) {
        return new Promise((resolve, reject) => {
            const data = this.sortedBySeqNum;
            if (data === null)
                reject(new Error('no store'));
            const required = data.filter(x => x.msgType === msgType);
            resolve(required);
        });
    }
    getIndex(seq) {
        const arr = this.sortedBySeqNum;
        let index = FixMsgMemoryStore.search(arr, seq);
        if (index < 0) {
            index = -(index + 1);
        }
        return index;
    }
    bounded(fromIdx, toIdx) {
        const arr = this.sortedBySeqNum;
        return fromIdx >= 0 && fromIdx <= arr.length && toIdx >= fromIdx && toIdx <= arr.length;
    }
    get(from) {
        return new Promise((resolve, reject) => {
            this.getSeqNumRange(from, from).then(res => {
                if (res.length > 0) {
                    const record = res[0].clone();
                    resolve(record);
                }
                else {
                    reject(new Error(`${from} not in store`));
                }
            }).catch(e => {
                reject(e);
            });
        });
    }
    getSeqNumRange(from, to) {
        return new Promise((resolve, reject) => {
            const arr = this.sortedBySeqNum;
            if (from < 0)
                reject(new Error(`illegal from ${from}`));
            if (to < 0)
                reject(new Error(`illegal to ${to}`));
            let fromIdx = this.getIndex(from);
            const toEnd = to === 0 || isNaN(to);
            let toIdx = toEnd ? arr.length - 1 : this.getIndex(to);
            if (this.bounded(fromIdx, toIdx)) {
                resolve(arr.slice(fromIdx, toIdx + 1));
            }
            else {
                reject(new Error(`incorrect bounds from=${from}, fromIdx=${fromIdx}, to=${to}, toIdx=${toIdx}, length=${arr.length}`));
            }
        });
    }
    buildState() {
        const arr = this.sortedBySeqNum;
        return {
            firstSeq: arr.length > 0 ? arr[0].seqNum : 0,
            lastSeq: arr.length > 0 ? arr[arr.length - 1].seqNum : 0,
            id: this.id,
            length: arr.length
        };
    }
    getState() {
        return new Promise((resolve, reject) => {
            try {
                resolve(this.buildState());
            }
            catch (e) {
                reject(e);
            }
        });
    }
    clear() {
        this.sortedBySeqNum = [];
        return new Promise((resolve, reject) => {
            try {
                resolve(this.buildState());
            }
            catch (e) {
                reject(e);
            }
        });
    }
    put(record) {
        return new Promise((resolve, reject) => {
            if (this.excluded.containsKey(record.msgType)) {
                resolve(this.buildState());
            }
            else {
                const arr = this.sortedBySeqNum;
                const idx = FixMsgMemoryStore.search(arr, record.seqNum);
                if (idx >= 0) {
                    reject(new Error(`this seqNum ${record.seqNum} already in store`));
                }
                arr.splice(-idx, 0, record);
                this.length = arr.length;
                resolve(this.buildState());
            }
        });
    }
    setExcMsgType(exclude) {
        this.excluded.clear();
        this.excludeRange(this.sessionMessages);
        this.excludeRange(exclude);
    }
    excludeRange(exclude) {
        exclude.forEach(s => {
            this.excluded.add(s, true);
        });
    }
    exists(seqNum) {
        return new Promise((resolve, reject) => {
            try {
                const arr = this.sortedBySeqNum;
                let index = FixMsgMemoryStore.search(arr, seqNum);
                resolve(index >= 0);
            }
            catch (e) {
                reject(e);
            }
        });
    }
}
exports.FixMsgMemoryStore = FixMsgMemoryStore;
//# sourceMappingURL=fix-msg-memory-store.js.map