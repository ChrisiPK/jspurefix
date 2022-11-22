import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { IStandardTrailer } from './set/standard_trailer';
export interface ISettlementInstructionRequest {
    StandardHeader: IStandardHeader;
    SettlInstReqID: string;
    TransactTime: Date;
    Parties?: IParties[];
    AllocAccount?: string;
    AllocAcctIDSource?: number;
    Side?: string;
    Product?: number;
    SecurityType?: string;
    CFICode?: string;
    EffectiveTime?: Date;
    ExpireTime?: Date;
    LastUpdateTime?: Date;
    StandInstDbType?: number;
    StandInstDbName?: string;
    StandInstDbID?: string;
    StandardTrailer: IStandardTrailer;
}
