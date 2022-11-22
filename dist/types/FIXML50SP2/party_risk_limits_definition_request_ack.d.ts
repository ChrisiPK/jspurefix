/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IRequestingPartyGrp } from './set/requesting_party_grp';
import { IPartyRiskLimitsAckGrp } from './set/party_risk_limits_ack_grp';
export interface IPartyRiskLimitsDefinitionRequestAck {
    RiskLimitRequestID: string;
    SecurityRequestResult?: number;
    RiskLimitRequestStatus: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardHeader?: IStandardHeader;
    RequestingPartyGrp?: IRequestingPartyGrp[];
    PartyRiskLimitsAckGrp?: IPartyRiskLimitsAckGrp[];
}
