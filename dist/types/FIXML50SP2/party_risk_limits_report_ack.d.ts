/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IPartyRiskLimitsUpdateGrp } from './set/party_risk_limits_update_grp';
export interface IPartyRiskLimitsReportAck {
    RiskLimitReportID: string;
    RiskLimitRequestID?: string;
    RiskLimitReportStatus: number;
    RiskLimitReportRejectReason?: number;
    TransactTime?: Date;
    RejectText?: string;
    EncodedRejectTextLen?: number;
    EncodedRejectText?: Buffer;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardHeader?: IStandardHeader;
    PartyRiskLimitsUpdateGrp?: IPartyRiskLimitsUpdateGrp[];
}
