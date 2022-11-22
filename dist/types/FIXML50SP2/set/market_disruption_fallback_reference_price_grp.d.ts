/// <reference types="node" />
export interface IMarketDisruptionFallbackReferencePriceGrp {
    MarketDisruptionFallbackUnderlierType?: number;
    MarketDisruptionFallbackUnderlierSecurityID?: string;
    MarketDisruptionFallbackUnderlierSecurityIDSource?: string;
    MarketDisruptionFallbackUnderlierSecurityDesc?: string;
    EncodedMarketDisruptionFallbackUnderlierSecurityDescLen?: number;
    EncodedMarketDisruptionFallbackUnderlierSecurityDesc?: Buffer;
    MarketDisruptionFallbackOpenUnits?: number;
    MarketDisruptionFallbackBasketCurrency?: string;
    MarketDisruptionFallbackBasketDivisor?: number;
}
