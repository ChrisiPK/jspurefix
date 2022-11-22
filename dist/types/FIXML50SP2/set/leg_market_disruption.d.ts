import { ILegMarketDisruptionEventGrp } from './leg_market_disruption_event_grp';
import { ILegMarketDisruptionFallbackGrp } from './leg_market_disruption_fallback_grp';
import { ILegMarketDisruptionFallbackReferencePriceGrp } from './leg_market_disruption_fallback_reference_price_grp';
export interface ILegMarketDisruption {
    LegMarketDisruptionProvision?: number;
    LegMarketDisruptionFallbackProvision?: number;
    LegMarketDisruptionMaximumDays?: number;
    LegMarketDisruptionMaterialityPercentage?: number;
    LegMarketDisruptionMinimumFuturesContracts?: number;
    LegMarketDisruptionEventGrp?: ILegMarketDisruptionEventGrp[];
    LegMarketDisruptionFallbackGrp?: ILegMarketDisruptionFallbackGrp[];
    LegMarketDisruptionFallbackReferencePriceGrp?: ILegMarketDisruptionFallbackReferencePriceGrp[];
}
