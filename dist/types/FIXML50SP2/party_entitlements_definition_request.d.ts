/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IRequestingPartyGrp } from './set/requesting_party_grp';
import { IPartyEntitlementUpdateGrp } from './set/party_entitlement_update_grp';
export interface IPartyEntitlementsDefinitionRequest {
    EntitlementRequestID: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardHeader?: IStandardHeader;
    RequestingPartyGrp?: IRequestingPartyGrp[];
    PartyEntitlementUpdateGrp?: IPartyEntitlementUpdateGrp[];
}
