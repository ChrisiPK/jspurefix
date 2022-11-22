/// <reference types="node" />
import { IPartyDetailGrp } from './party_detail_grp';
export interface IPartyDetailAckGrp {
    ListUpdateAction?: string;
    PartyDetailDefinitionStatus?: number;
    PartyDetailDefinitionResult?: number;
    RejectText?: string;
    EncodedRejectTextLen?: number;
    EncodedRejectText?: Buffer;
    PartyDetailGrp?: IPartyDetailGrp[];
}
