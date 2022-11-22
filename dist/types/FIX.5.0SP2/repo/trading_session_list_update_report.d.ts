import { IStandardHeader } from './set/standard_header';
import { IApplicationSequenceControl } from './set/application_sequence_control';
import { ITrdSessLstGrp } from './set/trd_sess_lst_grp';
import { IStandardTrailer } from './set/standard_trailer';
export interface ITradingSessionListUpdateReport {
    StandardHeader: IStandardHeader;
    ApplicationSequenceControl?: IApplicationSequenceControl;
    TradSesReqID?: string;
    TrdSessLstGrp: ITrdSessLstGrp[];
    StandardTrailer: IStandardTrailer;
}
