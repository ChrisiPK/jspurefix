/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IApplicationSequenceControl } from './set/application_sequence_control';
import { ISecTypesGrp } from './set/sec_types_grp';
export interface ISecurityTypes {
    SecurityReqID: string;
    SecurityResponseID: string;
    SecurityResponseType: number;
    TotNoSecurityTypes?: number;
    LastFragment?: boolean;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    MarketID?: string;
    MarketSegmentID?: string;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    SubscriptionRequestType?: string;
    StandardHeader?: IStandardHeader;
    ApplicationSequenceControl?: IApplicationSequenceControl;
    SecTypesGrp?: ISecTypesGrp[];
}
