/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IRequestingPartyGrp } from './set/requesting_party_grp';
import { IPartyDetailsUpdateGrp } from './set/party_details_update_grp';
export interface IPartyDetailsDefinitionRequest {
    PartyDetailsListRequestID: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardHeader?: IStandardHeader;
    RequestingPartyGrp?: IRequestingPartyGrp[];
    PartyDetailsUpdateGrp?: IPartyDetailsUpdateGrp[];
}
