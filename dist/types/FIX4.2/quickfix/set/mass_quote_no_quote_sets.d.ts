/// <reference types="node" />
import { IMassQuoteNoQuoteSetsNoQuoteEntries } from './mass_quote_no_quote_sets_no_quote_entries';
export interface IMassQuoteNoQuoteSets {
    QuoteSetID: string;
    UnderlyingSymbol: string;
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
    QuoteSetValidUntilTime?: Date;
    TotQuoteEntries: number;
    NoQuoteEntries: IMassQuoteNoQuoteSetsNoQuoteEntries[];
}
