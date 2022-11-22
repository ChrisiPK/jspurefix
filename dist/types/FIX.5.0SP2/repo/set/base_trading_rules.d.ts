import { ITickRules } from './tick_rules';
import { ILotTypeRules } from './lot_type_rules';
import { IPriceLimits } from './price_limits';
export interface IBaseTradingRules {
    TickRules?: ITickRules[];
    LotTypeRules?: ILotTypeRules[];
    PriceLimits?: IPriceLimits;
    ExpirationCycle?: number;
    MinTradeVol?: number;
    MaxTradeVol?: number;
    MaxPriceVariation?: number;
    ImpliedMarketIndicator?: number;
    TradingCurrency?: string;
    RoundLot?: number;
    MultilegModel?: number;
    MultilegPriceMethod?: number;
    PriceType?: number;
}
