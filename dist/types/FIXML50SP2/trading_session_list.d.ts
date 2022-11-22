import { IStandardHeader } from './set/standard_header';
import { IApplicationSequenceControl } from './set/application_sequence_control';
import { ITrdSessLstGrp } from './set/trd_sess_lst_grp';
export interface ITradingSessionList {
    TradSesReqID?: string;
    StandardHeader?: IStandardHeader;
    ApplicationSequenceControl?: IApplicationSequenceControl;
    TrdSessLstGrp?: ITrdSessLstGrp[];
}
