import { IStandardHeader } from './set/standard_header';
import { IBidCompRspGrp } from './set/bid_comp_rsp_grp';
import { IStandardTrailer } from './set/standard_trailer';
export interface IBidResponse {
    StandardHeader: IStandardHeader;
    BidID?: string;
    ClientBidID?: string;
    BidCompRspGrp: IBidCompRspGrp[];
    StandardTrailer: IStandardTrailer;
}
