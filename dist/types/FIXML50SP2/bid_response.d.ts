import { IStandardHeader } from './set/standard_header';
import { IBidCompRspGrp } from './set/bid_comp_rsp_grp';
export interface IBidResponse {
    BidID?: string;
    ClientBidID?: string;
    StandardHeader?: IStandardHeader;
    BidCompRspGrp?: IBidCompRspGrp[];
}
