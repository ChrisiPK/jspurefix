/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IListOrdGrp } from './set/list_ord_grp';
import { IStandardTrailer } from './set/standard_trailer';
export interface INewOrderList {
    StandardHeader: IStandardHeader;
    ListID: string;
    BidID?: string;
    ClientBidID?: string;
    ProgRptReqs?: number;
    BidType: number;
    ProgPeriodInterval?: number;
    CancellationRights?: string;
    MoneyLaunderingStatus?: string;
    RegistID?: string;
    ListExecInstType?: string;
    ListExecInst?: string;
    EncodedListExecInstLen?: number;
    EncodedListExecInst?: Buffer;
    AllowableOneSidednessPct?: number;
    AllowableOneSidednessValue?: number;
    AllowableOneSidednessCurr?: string;
    TotNoOrders: number;
    LastFragment?: boolean;
    ListOrdGrp: IListOrdGrp[];
    StandardTrailer: IStandardTrailer;
}
