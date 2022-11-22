/// <reference types="node" />
export interface IListStatusNoOrders {
    ClOrdID: string;
    SecondaryClOrdID?: string;
    CumQty: number;
    OrdStatus: string;
    WorkingIndicator?: boolean;
    LeavesQty: number;
    CxlQty: number;
    AvgPx: number;
    OrdRejReason?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
}
