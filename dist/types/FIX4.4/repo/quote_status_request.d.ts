import { IStandardHeader } from './set/standard_header';
import { IInstrument } from './set/instrument';
import { IFinancingDetails } from './set/financing_details';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
import { IInstrmtLegGrp } from './set/instrmt_leg_grp';
import { IParties } from './set/parties';
import { IStandardTrailer } from './set/standard_trailer';
export interface IQuoteStatusRequest {
    StandardHeader: IStandardHeader;
    QuoteStatusReqID?: string;
    QuoteID?: string;
    Instrument: IInstrument;
    FinancingDetails?: IFinancingDetails;
    UndInstrmtGrp?: IUndInstrmtGrp[];
    InstrmtLegGrp?: IInstrmtLegGrp[];
    Parties?: IParties[];
    Account?: string;
    AcctIDSource?: number;
    AccountType?: number;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    SubscriptionRequestType?: string;
    StandardTrailer: IStandardTrailer;
}
