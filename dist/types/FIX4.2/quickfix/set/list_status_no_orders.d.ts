/// <reference types="node" />
export interface IListStatusNoOrders {
    ClOrdID: string;
    CumQty: number;
    OrdStatus: string;
    LeavesQty: number;
    CxlQty: number;
    AvgPx: number;
    OrdRejReason?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
}
