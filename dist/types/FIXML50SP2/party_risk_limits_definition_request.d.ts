/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IRequestingPartyGrp } from './set/requesting_party_grp';
import { IPartyRiskLimitsUpdateGrp } from './set/party_risk_limits_update_grp';
export interface IPartyRiskLimitsDefinitionRequest {
    RiskLimitRequestID: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardHeader?: IStandardHeader;
    RequestingPartyGrp?: IRequestingPartyGrp[];
    PartyRiskLimitsUpdateGrp?: IPartyRiskLimitsUpdateGrp[];
}
