import { IStandardHeader } from './set/standard_header';
import { IUnderlyingInstrument } from './set/underlying_instrument';
import { IDerivativeSecurityListNoRelatedSym } from './set/derivative_security_list_no_related_sym';
import { IStandardTrailer } from './set/standard_trailer';
export interface IDerivativeSecurityList {
    StandardHeader: IStandardHeader;
    SecurityReqID: string;
    SecurityResponseID: string;
    SecurityRequestResult: number;
    UnderlyingInstrument?: IUnderlyingInstrument;
    TotalNumSecurities?: number;
    NoRelatedSym?: IDerivativeSecurityListNoRelatedSym[];
    StandardTrailer: IStandardTrailer;
}
