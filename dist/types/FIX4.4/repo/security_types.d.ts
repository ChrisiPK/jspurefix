/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { ISecTypesGrp } from './set/sec_types_grp';
import { IStandardTrailer } from './set/standard_trailer';
export interface ISecurityTypes {
    StandardHeader: IStandardHeader;
    SecurityReqID: string;
    SecurityResponseID: string;
    SecurityResponseType: number;
    TotNoSecurityTypes?: number;
    LastFragment?: boolean;
    SecTypesGrp?: ISecTypesGrp[];
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    SubscriptionRequestType?: string;
    StandardTrailer: IStandardTrailer;
}
