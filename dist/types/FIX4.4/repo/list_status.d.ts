/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IOrdListStatGrp } from './set/ord_list_stat_grp';
import { IStandardTrailer } from './set/standard_trailer';
export interface IListStatus {
    StandardHeader: IStandardHeader;
    ListID: string;
    ListStatusType: number;
    NoRpts: number;
    ListOrderStatus: number;
    RptSeq: number;
    ListStatusText?: string;
    EncodedListStatusTextLen?: number;
    EncodedListStatusText?: Buffer;
    TransactTime?: Date;
    TotNoOrders: number;
    LastFragment?: boolean;
    OrdListStatGrp: IOrdListStatGrp[];
    StandardTrailer: IStandardTrailer;
}
