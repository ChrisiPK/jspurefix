/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IApplicationSequenceControl } from './set/application_sequence_control';
import { IRequestingPartyGrp } from './set/requesting_party_grp';
import { IPartyDetailsUpdateGrp } from './set/party_details_update_grp';
export interface IPartyDetailsListUpdateReport {
    PartyDetailsListReportID: string;
    PartyDetailsListRequestID?: string;
    TotNoParties?: number;
    LastFragment?: boolean;
    TransactTime?: Date;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardHeader?: IStandardHeader;
    ApplicationSequenceControl?: IApplicationSequenceControl;
    RequestingPartyGrp?: IRequestingPartyGrp[];
    PartyDetailsUpdateGrp?: IPartyDetailsUpdateGrp[];
}
