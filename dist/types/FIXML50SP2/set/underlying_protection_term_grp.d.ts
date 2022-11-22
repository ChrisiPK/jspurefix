import { IUnderlyingProtectionTermEventNewsSourceGrp } from './underlying_protection_term_event_news_source_grp';
import { IUnderlyingProtectionTermEventGrp } from './underlying_protection_term_event_grp';
import { IUnderlyingProtectionTermObligationGrp } from './underlying_protection_term_obligation_grp';
export interface IUnderlyingProtectionTermGrp {
    UnderlyingProtectionTermNotional?: number;
    UnderlyingProtectionTermCurrency?: string;
    UnderlyingProtectionTermSellerNotifies?: boolean;
    UnderlyingProtectionTermBuyerNotifies?: boolean;
    UnderlyingProtectionTermEventBusinessCenter?: string;
    UnderlyingProtectionTermStandardSources?: boolean;
    UnderlyingProtectionTermEventMinimumSources?: number;
    UnderlyingProtectionTermXID?: string;
    UnderlyingProtectionTermEventNewsSourceGrp?: IUnderlyingProtectionTermEventNewsSourceGrp[];
    UnderlyingProtectionTermEventGrp?: IUnderlyingProtectionTermEventGrp[];
    UnderlyingProtectionTermObligationGrp?: IUnderlyingProtectionTermObligationGrp[];
}
