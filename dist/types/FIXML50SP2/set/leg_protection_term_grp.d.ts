import { ILegProtectionTermEventNewsSourceGrp } from './leg_protection_term_event_news_source_grp';
import { ILegProtectionTermEventGrp } from './leg_protection_term_event_grp';
import { ILegProtectionTermObligationGrp } from './leg_protection_term_obligation_grp';
export interface ILegProtectionTermGrp {
    LegProtectionTermNotional?: number;
    LegProtectionTermCurrency?: string;
    LegProtectionTermSellerNotifies?: boolean;
    LegProtectionTermBuyerNotifies?: boolean;
    LegProtectionTermEventBusinessCenter?: string;
    LegProtectionTermStandardSources?: boolean;
    LegProtectionTermEventMinimumSources?: number;
    LegProtectionTermXID?: string;
    LegProtectionTermEventNewsSourceGrp?: ILegProtectionTermEventNewsSourceGrp[];
    LegProtectionTermEventGrp?: ILegProtectionTermEventGrp[];
    LegProtectionTermObligationGrp?: ILegProtectionTermObligationGrp[];
}
