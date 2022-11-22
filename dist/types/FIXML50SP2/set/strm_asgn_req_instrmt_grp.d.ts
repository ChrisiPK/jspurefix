import { IInstrument } from './instrument';
export interface IStrmAsgnReqInstrmtGrp {
    SettlType?: string;
    MDEntrySize?: number;
    MDStreamID?: string;
    Instrument?: IInstrument;
}
