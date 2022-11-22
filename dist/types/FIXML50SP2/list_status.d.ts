/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IOrdListStatGrp } from './set/ord_list_stat_grp';
export interface IListStatus {
    ListID: string;
    ListStatusType: number;
    NoRpts: number;
    ListOrderStatus: number;
    ContingencyType?: number;
    ListRejectReason?: number;
    RptSeq: number;
    ListStatusText?: string;
    EncodedListStatusTextLen?: number;
    EncodedListStatusText?: Buffer;
    TransactTime?: Date;
    TotNoOrders: number;
    LastFragment?: boolean;
    StandardHeader?: IStandardHeader;
    OrdListStatGrp?: IOrdListStatGrp[];
}
