/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IRequestingPartyGrp } from './set/requesting_party_grp';
import { IPartyEntitlementAckGrp } from './set/party_entitlement_ack_grp';
export interface IPartyEntitlementsDefinitionRequestAck {
    EntitlementRequestID: string;
    EntitlementRequestStatus: number;
    SecurityRequestResult?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardHeader?: IStandardHeader;
    RequestingPartyGrp?: IRequestingPartyGrp[];
    PartyEntitlementAckGrp?: IPartyEntitlementAckGrp[];
}
