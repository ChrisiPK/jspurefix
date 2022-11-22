"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TradeFactory = void 0;
const repo_1 = require("../../../types/FIX4.4/repo");
const FIXML50SP2_1 = require("../../../types/FIXML50SP2");
class TradeFactory {
    constructor() {
        this.nextTradeId = 100000;
        this.nextExecId = 600000;
        this.securities = [
            'Gold',
            'Silver',
            'Platinum',
            'Magnesium',
            'Steel'
        ];
    }
    static tradeCaptureReportRequestAck(tcr, status) {
        return {
            TradeRequestID: tcr.TradeRequestID,
            TradeRequestType: tcr.TradeRequestType,
            TradeRequestStatus: status,
            TradeRequestResult: repo_1.TradeRequestResult.Successful
        };
    }
    static tradeCaptureReportRequest(requestId, tradeDate) {
        const d0 = tradeDate;
        const d1 = new Date(tradeDate.getTime());
        d1.setDate(d1.getDate() + 1);
        return {
            TradeRequestID: 'all-trades',
            TradeRequestType: repo_1.TradeRequestType.AllTrades,
            SubscriptionRequestType: repo_1.SubscriptionRequestType.SnapshotAndUpdates,
            TrdCapDtGrp: [
                {
                    TransactTime: d0
                },
                {
                    TransactTime: d1
                }
            ]
        };
    }
    static getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    batchOfTradeCaptureReport(toMake) {
        if (!toMake) {
            toMake = TradeFactory.getRandomInt(4, 8);
        }
        const arr = [];
        for (let i = 0; i < toMake; ++i) {
            const tc = this.singleTradeCaptureReport();
            arr.push(tc);
        }
        return arr;
    }
    singleTradeCaptureReport() {
        const tradeReportId = this.nextTradeId++;
        const qty = TradeFactory.getRandomInt(100, 200);
        const price = Math.round(Math.random() * 100 * 100) / 100;
        const instrument = TradeFactory.getRandomInt(0, this.securities.length - 1);
        const securities = this.securities;
        const execId = this.nextExecId++;
        return {
            TradeReportID: tradeReportId.toString(),
            TradeReportTransType: FIXML50SP2_1.TradeReportTransType.New,
            TradeReportType: repo_1.TradeReportType.Submit,
            TrdType: repo_1.TrdType.RegularTrade,
            TransactTime: new Date(),
            ExecID: execId.toString(),
            PreviouslyReported: false,
            OrdStatus: repo_1.OrdStatus.Filled,
            Instrument: {
                SecurityID: `${securities[instrument]}.INC`,
                Symbol: `${securities[instrument]}`
            },
            TradeDate: new Date(),
            LastQty: qty,
            LastPx: price
        };
    }
}
exports.TradeFactory = TradeFactory;
//# sourceMappingURL=trade-factory.js.map