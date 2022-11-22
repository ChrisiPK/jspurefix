import { IStandardHeader } from './set/standard_header';
import { IApplicationSequenceControl } from './set/application_sequence_control';
import { IUnderlyingInstrument } from './set/underlying_instrument';
import { IDerivativeSecurityDefinition } from './set/derivative_security_definition';
import { IRelSymDerivSecGrp } from './set/rel_sym_deriv_sec_grp';
import { IStandardTrailer } from './set/standard_trailer';
export interface IDerivativeSecurityList {
    StandardHeader: IStandardHeader;
    ApplicationSequenceControl?: IApplicationSequenceControl;
    SecurityReqID?: string;
    SecurityResponseID?: string;
    SecurityRequestResult?: number;
    UnderlyingInstrument?: IUnderlyingInstrument;
    DerivativeSecurityDefinition?: IDerivativeSecurityDefinition;
    TotNoRelatedSym?: number;
    LastFragment?: boolean;
    RelSymDerivSecGrp?: IRelSymDerivSecGrp[];
    StandardTrailer: IStandardTrailer;
    SecurityReportID?: number;
    ClearingBusinessDate?: Date;
    TransactTime?: Date;
}
