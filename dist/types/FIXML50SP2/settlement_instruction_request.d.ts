import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
export interface ISettlementInstructionRequest {
    SettlInstReqID: string;
    TransactTime: Date;
    AllocAccount?: string;
    AllocAcctIDSource?: number;
    Side?: string;
    Product?: number;
    SecurityType?: string;
    CFICode?: string;
    SettlCurrency?: string;
    EffectiveTime?: Date;
    ExpireTime?: Date;
    LastUpdateTime?: Date;
    StandInstDbType?: number;
    StandInstDbName?: string;
    StandInstDbID?: string;
    StandardHeader?: IStandardHeader;
    Parties?: IParties[];
}
