/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IApplicationSequenceControl } from './set/application_sequence_control';
import { IPartyEntitlementGrp } from './set/party_entitlement_grp';
export interface IPartyEntitlementsReport {
    EntitlementReportID: string;
    EntitlementRequestID?: string;
    SecurityRequestResult?: number;
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
    PartyEntitlementGrp?: IPartyEntitlementGrp[];
}
