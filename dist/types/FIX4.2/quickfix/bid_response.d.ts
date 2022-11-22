import { IStandardHeader } from './set/standard_header';
import { IBidResponseNoBidComponents } from './set/bid_response_no_bid_components';
import { IStandardTrailer } from './set/standard_trailer';
export interface IBidResponse {
    StandardHeader: IStandardHeader;
    BidID?: string;
    ClientBidID?: string;
    NoBidComponents: IBidResponseNoBidComponents[];
    StandardTrailer: IStandardTrailer;
}
