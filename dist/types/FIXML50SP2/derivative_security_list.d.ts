import { IStandardHeader } from './set/standard_header';
import { IApplicationSequenceControl } from './set/application_sequence_control';
import { IUnderlyingInstrument } from './set/underlying_instrument';
import { IDerivativeSecurityDefinition } from './set/derivative_security_definition';
import { IRelSymDerivSecGrp } from './set/rel_sym_deriv_sec_grp';
export interface IDerivativeSecurityList {
    SecurityReportID?: number;
    SecurityReqID?: string;
    SecurityResponseID?: string;
    SecurityRequestResult?: number;
    SecurityRejectReason?: number;
    ClearingBusinessDate?: Date;
    LastUpdateTime?: Date;
    TransactTime?: Date;
    TotNoRelatedSym?: number;
    LastFragment?: boolean;
    StandardHeader?: IStandardHeader;
    ApplicationSequenceControl?: IApplicationSequenceControl;
    UnderlyingInstrument?: IUnderlyingInstrument;
    DerivativeSecurityDefinition?: IDerivativeSecurityDefinition;
    RelSymDerivSecGrp?: IRelSymDerivSecGrp[];
}
