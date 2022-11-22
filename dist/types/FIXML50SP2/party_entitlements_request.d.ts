/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IRequestingPartyGrp } from './set/requesting_party_grp';
import { IParties } from './set/parties';
import { IRequestedPartyRoleGrp } from './set/requested_party_role_grp';
import { IEntitlementTypeGrp } from './set/entitlement_type_grp';
import { IInstrumentScopeGrp } from './set/instrument_scope_grp';
import { IMarketSegmentScopeGrp } from './set/market_segment_scope_grp';
export interface IPartyEntitlementsRequest {
    EntitlementRequestID?: string;
    SubscriptionRequestType?: string;
    EntitlementStatus?: number;
    EntitlementPlatform?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardHeader?: IStandardHeader;
    RequestingPartyGrp?: IRequestingPartyGrp[];
    Parties?: IParties[];
    RequestedPartyRoleGrp?: IRequestedPartyRoleGrp[];
    EntitlementTypeGrp?: IEntitlementTypeGrp[];
    InstrumentScopeGrp?: IInstrumentScopeGrp[];
    MarketSegmentScopeGrp?: IMarketSegmentScopeGrp[];
}
