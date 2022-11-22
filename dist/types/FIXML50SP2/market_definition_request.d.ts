import { IStandardHeader } from './set/standard_header';
export interface IMarketDefinitionRequest {
    MarketReqID: string;
    SubscriptionRequestType: string;
    MarketID?: string;
    MarketSegmentID?: string;
    ParentMktSegmID?: string;
    StandardHeader?: IStandardHeader;
}
