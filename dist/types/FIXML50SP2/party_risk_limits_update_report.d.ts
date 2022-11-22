/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IApplicationSequenceControl } from './set/application_sequence_control';
import { IRequestingPartyGrp } from './set/requesting_party_grp';
import { IPartyRiskLimitsUpdateGrp } from './set/party_risk_limits_update_grp';
export interface IPartyRiskLimitsUpdateReport {
    RiskLimitReportID: string;
    RiskLimitRequestID?: string;
    RiskLimitRequestType?: number;
    TotNoParties?: number;
    LastFragment?: boolean;
    TransactTime?: Date;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardHeader?: IStandardHeader;
    ApplicationSequenceControl?: IApplicationSequenceControl;
    RequestingPartyGrp?: IRequestingPartyGrp[];
    PartyRiskLimitsUpdateGrp?: IPartyRiskLimitsUpdateGrp[];
}
