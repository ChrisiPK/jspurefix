import { IEntitlementAttribGrp } from './entitlement_attrib_grp';
import { IInstrumentScopeGrp } from './instrument_scope_grp';
import { IMarketSegmentScopeGrp } from './market_segment_scope_grp';
export interface IEntitlementGrp {
    EntitlementIndicator?: boolean;
    MiscFeeType?: string;
    SecuritySubType?: string;
    EntitlementID?: string;
    EntitlementPlatform?: string;
    EntitlementStartDate?: Date;
    EntitlementEndDate?: Date;
    EntitlementAttribGrp?: IEntitlementAttribGrp[];
    InstrumentScopeGrp?: IInstrumentScopeGrp[];
    MarketSegmentScopeGrp?: IMarketSegmentScopeGrp[];
}
