import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { IQuotSetGrp } from './set/quot_set_grp';
import { IStandardTrailer } from './set/standard_trailer';
export interface IMassQuote {
    StandardHeader: IStandardHeader;
    QuoteReqID?: string;
    QuoteID: string;
    QuoteType?: number;
    QuoteResponseLevel?: number;
    Parties?: IParties[];
    Account?: string;
    AcctIDSource?: number;
    AccountType?: number;
    DefBidSize?: number;
    DefOfferSize?: number;
    QuotSetGrp: IQuotSetGrp[];
    StandardTrailer: IStandardTrailer;
}
