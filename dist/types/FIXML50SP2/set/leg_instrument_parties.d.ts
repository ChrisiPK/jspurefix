import { ILegInstrumentPtysSubGrp } from './leg_instrument_ptys_sub_grp';
export interface ILegInstrumentParties {
    LegInstrumentPartyID?: string;
    LegInstrumentPartyIDSource?: string;
    LegInstrumentPartyRole?: number;
    LegInstrumentPartyRoleQualifier?: number;
    LegInstrumentPtysSubGrp?: ILegInstrumentPtysSubGrp[];
}
