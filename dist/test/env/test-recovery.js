"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestRecovery = void 0;
const store_1 = require("../../store");
const types_1 = require("../../types");
class TestRecovery {
    constructor(views, config) {
        this.views = views;
        this.config = config;
        const id = config.description.SenderCompId;
        this.store = new store_1.FixMsgMemoryStore(`test-${id}`, config);
        this.records = this.getRecords(id);
        this.recovery = new store_1.FixMsgAsciiStoreResend(this.store, config);
    }
    populate() {
        return __awaiter(this, void 0, void 0, function* () {
            const records = this.records;
            const toWrite = records.map(r => this.store.put(r));
            yield Promise.all(toWrite);
        });
    }
    getRecords(comp) {
        return this.views.reduce((agg, v) => {
            if (v.getString(types_1.MsgTag.SenderCompID) === comp) {
                agg.push(store_1.FixMsgStoreRecord.toMsgStoreRecord(v));
            }
            return agg;
        }, []);
    }
}
exports.TestRecovery = TestRecovery;
//# sourceMappingURL=test-recovery.js.map