import { IStandardHeader } from './set/standard_header';
import { ICompIDStatGrp } from './set/comp_id_stat_grp';
import { IStandardTrailer } from './set/standard_trailer';
export interface INetworkCounterpartySystemStatusResponse {
    StandardHeader: IStandardHeader;
    NetworkStatusResponseType: number;
    NetworkRequestID?: string;
    NetworkResponseID: string;
    LastNetworkResponseID?: string;
    CompIDStatGrp: ICompIDStatGrp[];
    StandardTrailer: IStandardTrailer;
}
