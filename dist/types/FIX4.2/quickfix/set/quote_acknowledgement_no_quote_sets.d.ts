/// <reference types="node" />
import { IQuoteAcknowledgementNoQuoteSetsNoQuoteEntries } from './quote_acknowledgement_no_quote_sets_no_quote_entries';
export interface IQuoteAcknowledgementNoQuoteSets {
    QuoteSetID?: string;
    UnderlyingSymbol?: string;
    UnderlyingSymbolSfx?: string;
    UnderlyingSecurityID?: string;
    UnderlyingIDSource?: string;
    UnderlyingSecurityType?: string;
    UnderlyingMaturityMonthYear?: string;
    UnderlyingMaturityDay?: string;
    UnderlyingPutOrCall?: number;
    UnderlyingStrikePrice?: number;
    UnderlyingOptAttribute?: string;
    UnderlyingContractMultiplier?: number;
    UnderlyingCouponRate?: number;
    UnderlyingSecurityExchange?: string;
    UnderlyingIssuer?: string;
    EncodedUnderlyingIssuerLen?: number;
    EncodedUnderlyingIssuer?: Buffer;
    UnderlyingSecurityDesc?: string;
    EncodedUnderlyingSecurityDescLen?: number;
    EncodedUnderlyingSecurityDesc?: Buffer;
    TotQuoteEntries?: number;
    NoQuoteEntries?: IQuoteAcknowledgementNoQuoteSetsNoQuoteEntries[];
}
