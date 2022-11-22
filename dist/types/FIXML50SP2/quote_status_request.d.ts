import { IStandardHeader } from './set/standard_header';
import { IInstrument } from './set/instrument';
import { IFinancingDetails } from './set/financing_details';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
import { IInstrmtLegGrp } from './set/instrmt_leg_grp';
import { IParties } from './set/parties';
import { ITargetParties } from './set/target_parties';
export interface IQuoteStatusRequest {
    QuoteStatusReqID?: string;
    QuoteID?: string;
    Account?: string;
    AcctIDSource?: number;
    AccountType?: number;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    SubscriptionRequestType?: string;
    StandardHeader?: IStandardHeader;
    Instrument?: IInstrument;
    FinancingDetails?: IFinancingDetails;
    UndInstrmtGrp?: IUndInstrmtGrp[];
    InstrmtLegGrp?: IInstrmtLegGrp[];
    Parties?: IParties[];
    TargetParties?: ITargetParties[];
}
