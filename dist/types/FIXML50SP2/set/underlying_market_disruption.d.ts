import { IUnderlyingMarketDisruptionEventGrp } from './underlying_market_disruption_event_grp';
import { IUnderlyingMarketDisruptionFallbackGrp } from './underlying_market_disruption_fallback_grp';
import { IUnderlyingMarketDisruptionFallbackReferencePriceGrp } from './underlying_market_disruption_fallback_reference_price_grp';
export interface IUnderlyingMarketDisruption {
    UnderlyingMarketDisruptionProvision?: number;
    UnderlyingMarketDisruptionFallbackProvision?: number;
    UnderlyingMarketDisruptionMaximumDays?: number;
    UnderlyingMarketDisruptionMaterialityPercentage?: number;
    UnderlyingMarketDisruptionMinimumFuturesContracts?: number;
    UnderlyingMarketDisruptionEventGrp?: IUnderlyingMarketDisruptionEventGrp[];
    UnderlyingMarketDisruptionFallbackGrp?: IUnderlyingMarketDisruptionFallbackGrp[];
    UnderlyingMarketDisruptionFallbackReferencePriceGrp?: IUnderlyingMarketDisruptionFallbackReferencePriceGrp[];
}
