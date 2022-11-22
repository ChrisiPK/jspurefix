import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { IQuotCxlEntriesGrp } from './set/quot_cxl_entries_grp';
import { IStandardTrailer } from './set/standard_trailer';
export interface IQuoteCancel {
    StandardHeader: IStandardHeader;
    QuoteReqID?: string;
    QuoteID: string;
    QuoteCancelType: number;
    QuoteResponseLevel?: number;
    Parties?: IParties[];
    Account?: string;
    AcctIDSource?: number;
    AccountType?: number;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    QuotCxlEntriesGrp?: IQuotCxlEntriesGrp[];
    StandardTrailer: IStandardTrailer;
}
