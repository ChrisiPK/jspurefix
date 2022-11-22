/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IApplicationSequenceControl } from './set/application_sequence_control';
import { IPartyRiskLimitsGrp } from './set/party_risk_limits_grp';
export interface IPartyRiskLimitsReport {
    RiskLimitReportID: string;
    RiskLimitRequestID?: string;
    RiskLimitRequestType?: number;
    SecurityRequestResult?: number;
    UnsolicitedIndicator?: boolean;
    TotNoParties?: number;
    LastFragment?: boolean;
    TransactTime?: Date;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    RejectText?: string;
    EncodedRejectTextLen?: number;
    EncodedRejectText?: Buffer;
    StandardHeader?: IStandardHeader;
    ApplicationSequenceControl?: IApplicationSequenceControl;
    PartyRiskLimitsGrp?: IPartyRiskLimitsGrp[];
}
