import { IProtectionTermEventNewsSourceGrp } from './protection_term_event_news_source_grp';
import { IProtectionTermEventGrp } from './protection_term_event_grp';
import { IProtectionTermObligationGrp } from './protection_term_obligation_grp';
export interface IProtectionTermGrp {
    ProtectionTermNotional?: number;
    ProtectionTermCurrency?: string;
    ProtectionTermSellerNotifies?: boolean;
    ProtectionTermBuyerNotifies?: boolean;
    ProtectionTermEventBusinessCenter?: string;
    ProtectionTermStandardSources?: boolean;
    ProtectionTermEventMinimumSources?: number;
    ProtectionTermXID?: string;
    ProtectionTermEventNewsSourceGrp?: IProtectionTermEventNewsSourceGrp[];
    ProtectionTermEventGrp?: IProtectionTermEventGrp[];
    ProtectionTermObligationGrp?: IProtectionTermObligationGrp[];
}
