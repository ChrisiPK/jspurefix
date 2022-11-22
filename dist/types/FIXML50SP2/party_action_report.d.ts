/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IInstrumentScope } from './set/instrument_scope';
import { IRequestingPartyGrp } from './set/requesting_party_grp';
import { IParties } from './set/parties';
import { IRelatedPartyDetailGrp } from './set/related_party_detail_grp';
export interface IPartyActionReport {
    EffectiveBusinessDate?: Date;
    PartyActionRequestID?: string;
    PartyActionReportID: string;
    PartyActionType: number;
    PartyActionResponse: number;
    PartyActionRejectReason?: number;
    ApplTestMessageIndicator?: boolean;
    RejectText?: string;
    EncodedRejectTextLen?: number;
    EncodedRejectText?: Buffer;
    MarketID?: string;
    MarketSegmentID?: string;
    TransactTime?: Date;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    CopyMsgIndicator?: boolean;
    StandardHeader?: IStandardHeader;
    InstrumentScope?: IInstrumentScope;
    RequestingPartyGrp?: IRequestingPartyGrp[];
    Parties?: IParties[];
    RelatedPartyDetailGrp?: IRelatedPartyDetailGrp[];
}
