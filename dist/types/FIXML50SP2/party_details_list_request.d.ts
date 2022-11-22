/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IRequestingPartyGrp } from './set/requesting_party_grp';
import { IParties } from './set/parties';
import { IRequestedPartyRoleGrp } from './set/requested_party_role_grp';
import { IPartyRelationshipGrp } from './set/party_relationship_grp';
export interface IPartyDetailsListRequest {
    PartyDetailsListRequestID: string;
    SubscriptionRequestType?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardHeader?: IStandardHeader;
    RequestingPartyGrp?: IRequestingPartyGrp[];
    Parties?: IParties[];
    RequestedPartyRoleGrp?: IRequestedPartyRoleGrp[];
    PartyRelationshipGrp?: IPartyRelationshipGrp[];
}
