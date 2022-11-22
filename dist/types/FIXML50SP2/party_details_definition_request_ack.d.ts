/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IRequestingPartyGrp } from './set/requesting_party_grp';
import { IPartyDetailAckGrp } from './set/party_detail_ack_grp';
export interface IPartyDetailsDefinitionRequestAck {
    PartyDetailsListRequestID: string;
    PartyDetailRequestStatus: number;
    SecurityRequestResult?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardHeader?: IStandardHeader;
    RequestingPartyGrp?: IRequestingPartyGrp[];
    PartyDetailAckGrp?: IPartyDetailAckGrp[];
}
