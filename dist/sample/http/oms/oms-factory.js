"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OmsFactory = void 0;
const FIXML50SP2_1 = require("../../../types/FIXML50SP2");
class OmsFactory {
    constructor(account) {
        this.account = account;
        this.id = 1;
        this.execId = 1;
    }
    createOrder(symbol, side, qty, price) {
        const id = this.id++;
        return {
            ClOrdID: `Cli${id}`,
            Account: this.account,
            Side: side,
            Price: price,
            OrdType: FIXML50SP2_1.OrdType.Limit,
            OrderQtyData: {
                OrderQty: qty
            },
            Instrument: {
                Symbol: symbol,
                SecurityID: '459200101',
                SecurityIDSource: FIXML50SP2_1.SecurityIDSource.IsinNumber
            },
            TimeInForce: FIXML50SP2_1.TimeInForce.GoodTillCancelGtc
        };
    }
    fillOrder(order) {
        const id = this.execId++;
        return {
            ClOrdID: order.ClOrdID,
            OrdType: order.OrdType,
            TransactTime: new Date(),
            AvgPx: order.Price,
            LeavesQty: 0,
            LastPx: order.Price,
            ExecType: FIXML50SP2_1.ExecType.OrderStatus,
            OrdStatus: FIXML50SP2_1.OrdStatus.Filled,
            ExecID: `exec${id}`,
            Side: order.Side,
            Price: order.Price,
            OrderQtyData: {
                OrderQty: order.OrderQtyData.OrderQty
            },
            Instrument: {
                Symbol: order.Instrument.Symbol,
                SecurityID: order.Instrument.SecurityID,
                SecurityIDSource: FIXML50SP2_1.SecurityIDSource.IsinNumber
            }
        };
    }
}
exports.OmsFactory = OmsFactory;
//# sourceMappingURL=oms-factory.js.map