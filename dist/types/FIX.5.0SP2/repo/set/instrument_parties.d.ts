import { IInstrumentPtysSubGrp } from './instrument_ptys_sub_grp';
export interface IInstrumentParties {
    InstrumentPartyID?: string;
    InstrumentPartyIDSource?: string;
    InstrumentPartyRole?: number;
    InstrumentPtysSubGrp?: IInstrumentPtysSubGrp[];
}
