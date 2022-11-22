/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IApplicationSequenceControl } from './set/application_sequence_control';
import { IPartyDetailGrp } from './set/party_detail_grp';
export interface IPartyDetailsListReport {
    PartyDetailsListReportID: string;
    PartyDetailsListRequestID?: string;
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
    PartyDetailGrp?: IPartyDetailGrp[];
}
