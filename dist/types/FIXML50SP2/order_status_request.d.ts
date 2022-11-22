import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { IInstrument } from './set/instrument';
import { IFinancingDetails } from './set/financing_details';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
export interface IOrderStatusRequest {
    OrderID?: string;
    ClOrdID?: string;
    SecondaryClOrdID?: string;
    ClOrdLinkID?: string;
    OrdStatusReqID?: string;
    Account?: string;
    AcctIDSource?: number;
    MarketSegmentID?: string;
    Side: string;
    StandardHeader?: IStandardHeader;
    Parties?: IParties[];
    Instrument?: IInstrument;
    FinancingDetails?: IFinancingDetails;
    UndInstrmtGrp?: IUndInstrmtGrp[];
}
