import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { IInstrument } from './set/instrument';
import { IFinancingDetails } from './set/financing_details';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
import { IStandardTrailer } from './set/standard_trailer';
export interface IOrderStatusRequest {
    StandardHeader: IStandardHeader;
    OrderID?: string;
    ClOrdID?: string;
    SecondaryClOrdID?: string;
    ClOrdLinkID?: string;
    Parties?: IParties[];
    OrdStatusReqID?: string;
    Account?: string;
    AcctIDSource?: number;
    Instrument: IInstrument;
    FinancingDetails?: IFinancingDetails;
    UndInstrmtGrp?: IUndInstrmtGrp;
    Side: string;
    StandardTrailer: IStandardTrailer;
}
