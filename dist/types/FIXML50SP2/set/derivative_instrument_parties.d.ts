import { IDerivativeInstrumentPartySubIDsGrp } from './derivative_instrument_party_sub_i_ds_grp';
export interface IDerivativeInstrumentParties {
    DerivativeInstrumentPartyID?: string;
    DerivativeInstrumentPartyIDSource?: string;
    DerivativeInstrumentPartyRole?: number;
    DerivativeInstrumentPartyRoleQualifier?: number;
    DerivativeInstrumentPartySubIDsGrp?: IDerivativeInstrumentPartySubIDsGrp[];
}
