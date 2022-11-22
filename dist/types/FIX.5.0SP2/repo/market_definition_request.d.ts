import { IStandardHeader } from './set/standard_header';
import { IStandardTrailer } from './set/standard_trailer';
export interface IMarketDefinitionRequest {
    StandardHeader: IStandardHeader;
    MarketReqID: string;
    SubscriptionRequestType: string;
    MarketID?: string;
    MarketSegmentID?: string;
    ParentMktSegmID?: string;
    StandardTrailer: IStandardTrailer;
}
