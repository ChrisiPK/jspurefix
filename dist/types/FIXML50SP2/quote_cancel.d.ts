import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { ITargetParties } from './set/target_parties';
import { IQuotCxlEntriesGrp } from './set/quot_cxl_entries_grp';
export interface IQuoteCancel {
    QuoteReqID?: string;
    QuoteID?: string;
    SecondaryQuoteID?: string;
    QuoteMsgID?: string;
    QuoteCancelType: number;
    QuoteType?: number;
    QuoteResponseLevel?: number;
    Account?: string;
    AcctIDSource?: number;
    AccountType?: number;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    StandardHeader?: IStandardHeader;
    Parties?: IParties[];
    TargetParties?: ITargetParties[];
    QuotCxlEntriesGrp?: IQuotCxlEntriesGrp[];
}
