/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IInstrumentScope } from './set/instrument_scope';
import { IRequestingPartyGrp } from './set/requesting_party_grp';
import { IParties } from './set/parties';
import { IRelatedPartyDetailGrp } from './set/related_party_detail_grp';
export interface IPartyActionRequest {
    PartyActionRequestID: string;
    PartyActionType: number;
    ApplTestMessageIndicator?: boolean;
    MarketID?: string;
    MarketSegmentID?: string;
    TransactTime?: Date;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardHeader?: IStandardHeader;
    InstrumentScope?: IInstrumentScope;
    RequestingPartyGrp?: IRequestingPartyGrp[];
    Parties?: IParties[];
    RelatedPartyDetailGrp?: IRelatedPartyDetailGrp[];
}
