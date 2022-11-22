import { IStandardHeader } from './set/standard_header';
import { ICompIDStatGrp } from './set/comp_id_stat_grp';
export interface INetworkCounterpartySystemStatusResponse {
    NetworkStatusResponseType: number;
    NetworkRequestID?: string;
    NetworkResponseID: string;
    LastNetworkResponseID?: string;
    StandardHeader?: IStandardHeader;
    CompIDStatGrp?: ICompIDStatGrp[];
}
