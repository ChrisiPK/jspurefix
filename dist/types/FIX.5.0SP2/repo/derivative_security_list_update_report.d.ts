import { IStandardHeader } from './set/standard_header';
import { IApplicationSequenceControl } from './set/application_sequence_control';
import { IUnderlyingInstrument } from './set/underlying_instrument';
import { IDerivativeSecurityDefinition } from './set/derivative_security_definition';
import { IRelSymDerivSecUpdGrp } from './set/rel_sym_deriv_sec_upd_grp';
import { IStandardTrailer } from './set/standard_trailer';
export interface IDerivativeSecurityListUpdateReport {
    StandardHeader: IStandardHeader;
    ApplicationSequenceControl?: IApplicationSequenceControl;
    SecurityReqID?: string;
    SecurityResponseID?: string;
    SecurityRequestResult?: number;
    SecurityUpdateAction?: string;
    UnderlyingInstrument?: IUnderlyingInstrument;
    DerivativeSecurityDefinition?: IDerivativeSecurityDefinition;
    TotNoRelatedSym?: number;
    LastFragment?: boolean;
    RelSymDerivSecUpdGrp?: IRelSymDerivSecUpdGrp[];
    StandardTrailer: IStandardTrailer;
    TransactTime?: Date;
}
