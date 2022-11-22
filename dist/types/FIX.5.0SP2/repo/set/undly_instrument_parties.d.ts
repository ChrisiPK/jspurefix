import { IUndlyInstrumentPtysSubGrp } from './undly_instrument_ptys_sub_grp';
export interface IUndlyInstrumentParties {
    UnderlyingInstrumentPartyID?: string;
    UnderlyingInstrumentPartyIDSource?: string;
    UnderlyingInstrumentPartyRole?: number;
    UndlyInstrumentPtysSubGrp?: IUndlyInstrumentPtysSubGrp[];
}
