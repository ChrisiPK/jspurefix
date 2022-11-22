"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TradeCaptureServer = void 0;
const transport_1 = require("../../../transport");
const types_1 = require("../../../types");
const repo_1 = require("../../../types/FIX4.4/repo");
const trade_factory_1 = require("./trade-factory");
class TradeCaptureServer extends transport_1.AsciiSession {
    constructor(config) {
        super(config);
        this.config = config;
        this.tradeFactory = new trade_factory_1.TradeFactory();
        this.timerHandle = null;
        this.logReceivedMsgs = true;
        this.logger = config.logFactory.logger(`${this.me}:TradeCaptureServer`);
        this.fixLog = config.logFactory.plain(`jsfix.${config.description.application.name}.txt`);
    }
    onApplicationMsg(msgType, view) {
        this.logger.info(`${view.toJson()}`);
        switch (msgType) {
            case types_1.MsgType.TradeCaptureReportRequest: {
                this.tradeCaptureReportRequest(view.toObject());
                break;
            }
            default: {
                const seqNum = view.getTyped(repo_1.MsgTag.MsgSeqNum);
                this.send(msgType, this.config.factory.reject(msgType, seqNum, `${this.me}: unexpected msg type '${msgType}'`, repo_1.SessionRejectReason.InvalidMsgType));
                break;
            }
        }
    }
    onReady(view) {
        this.logger.info('ready for requests.');
    }
    onStopped() {
        this.logger.info('stopped');
        if (this.timerHandle) {
            clearInterval(this.timerHandle);
        }
    }
    onLogon(view, user, password) {
        return true;
    }
    onDecoded(msgType, txt) {
        this.fixLog.info(txt);
    }
    onEncoded(msgType, txt) {
        this.fixLog.info(txt);
    }
    tradeCaptureReportRequest(tcr) {
        this.logger.info(`received tcr ${tcr.TradeRequestID}`);
        this.send(types_1.MsgType.TradeCaptureReportRequestAck, trade_factory_1.TradeFactory.tradeCaptureReportRequestAck(tcr, repo_1.TradeRequestStatus.Accepted));
        const batch = this.tradeFactory.batchOfTradeCaptureReport(5);
        batch.forEach((tc) => {
            this.send(types_1.MsgType.TradeCaptureReport, tc);
        });
        this.send(types_1.MsgType.TradeCaptureReportRequestAck, trade_factory_1.TradeFactory.tradeCaptureReportRequestAck(tcr, repo_1.TradeRequestStatus.Completed));
        switch (tcr.SubscriptionRequestType) {
            case repo_1.SubscriptionRequestType.SnapshotAndUpdates: {
                this.timerHandle = setInterval(() => {
                    if (Math.random() < 0.4) {
                        const tc = this.tradeFactory.singleTradeCaptureReport();
                        this.send(types_1.MsgType.TradeCaptureReport, tc);
                    }
                }, 5000);
                break;
            }
        }
    }
}
exports.TradeCaptureServer = TradeCaptureServer;
//# sourceMappingURL=trade-capture-server.js.map