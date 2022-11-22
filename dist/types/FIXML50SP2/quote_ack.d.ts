/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
export interface IQuoteAck {
    QuoteID?: string;
    QuoteMsgID?: string;
    QuoteReqID?: string;
    QuoteType?: number;
    QuoteCancelType?: number;
    SecondaryQuoteID?: string;
    QuoteAckStatus: number;
    OrdRejReason?: number;
    RejectText?: string;
    EncodedRejectTextLen?: number;
    EncodedRejectText?: Buffer;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardHeader?: IStandardHeader;
    Parties?: IParties[];
}
