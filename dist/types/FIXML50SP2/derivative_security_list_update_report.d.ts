import { IStandardHeader } from './set/standard_header';
import { IApplicationSequenceControl } from './set/application_sequence_control';
import { IUnderlyingInstrument } from './set/underlying_instrument';
import { IDerivativeSecurityDefinition } from './set/derivative_security_definition';
import { IRelSymDerivSecUpdGrp } from './set/rel_sym_deriv_sec_upd_grp';
export interface IDerivativeSecurityListUpdateReport {
    SecurityReqID?: string;
    SecurityResponseID?: string;
    SecurityRequestResult?: number;
    SecurityUpdateAction?: string;
    LastUpdateTime?: Date;
    TransactTime?: Date;
    TotNoRelatedSym?: number;
    LastFragment?: boolean;
    StandardHeader?: IStandardHeader;
    ApplicationSequenceControl?: IApplicationSequenceControl;
    UnderlyingInstrument?: IUnderlyingInstrument;
    DerivativeSecurityDefinition?: IDerivativeSecurityDefinition;
    RelSymDerivSecUpdGrp?: IRelSymDerivSecUpdGrp[];
}
