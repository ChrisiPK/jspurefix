/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IRequestingPartyGrp } from './set/requesting_party_grp';
import { IParties } from './set/parties';
import { IRequestedPartyRoleGrp } from './set/requested_party_role_grp';
import { IRequestedRiskLimitTypesGrp } from './set/requested_risk_limit_types_grp';
import { IRiskInstrumentScopeGrp } from './set/risk_instrument_scope_grp';
export interface IPartyRiskLimitsRequest {
    RiskLimitRequestID: string;
    RiskLimitRequestType?: number;
    SubscriptionRequestType?: string;
    RiskLimitPlatform?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardHeader?: IStandardHeader;
    RequestingPartyGrp?: IRequestingPartyGrp[];
    Parties?: IParties[];
    RequestedPartyRoleGrp?: IRequestedPartyRoleGrp[];
    RequestedRiskLimitTypesGrp?: IRequestedRiskLimitTypesGrp[];
    RiskInstrumentScopeGrp?: IRiskInstrumentScopeGrp[];
}
