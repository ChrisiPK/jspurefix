import { TradeRequestStatus, ITradeCaptureReportRequestAck, ITradeCaptureReport, ITradeCaptureReportRequest } from '../../../types/FIX4.4/repo';
export declare class TradeFactory {
    private nextTradeId;
    private nextExecId;
    private readonly securities;
    static tradeCaptureReportRequestAck(tcr: ITradeCaptureReportRequest, status: TradeRequestStatus): ITradeCaptureReportRequestAck;
    static tradeCaptureReportRequest(requestId: string, tradeDate: Date): ITradeCaptureReportRequest;
    private static getRandomInt;
    batchOfTradeCaptureReport(toMake?: number): ITradeCaptureReport[];
    singleTradeCaptureReport(): ITradeCaptureReport;
}
