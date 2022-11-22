import { IMarketDisruptionEventGrp } from './market_disruption_event_grp';
import { IMarketDisruptionFallbackGrp } from './market_disruption_fallback_grp';
import { IMarketDisruptionFallbackReferencePriceGrp } from './market_disruption_fallback_reference_price_grp';
export interface IMarketDisruption {
    MarketDisruptionProvision?: number;
    MarketDisruptionFallbackProvision?: number;
    MarketDisruptionMaximumDays?: number;
    MarketDisruptionMaterialityPercentage?: number;
    MarketDisruptionMinimumFuturesContracts?: number;
    MarketDisruptionEventGrp?: IMarketDisruptionEventGrp[];
    MarketDisruptionFallbackGrp?: IMarketDisruptionFallbackGrp[];
    MarketDisruptionFallbackReferencePriceGrp?: IMarketDisruptionFallbackReferencePriceGrp[];
}
