import { IInstrument } from './instrument';
export interface IStrmAsgnReqInstrmtGrp {
    Instrument?: IInstrument;
    SettlType?: string;
    MDEntrySize?: number;
    MDStreamID?: string;
}
