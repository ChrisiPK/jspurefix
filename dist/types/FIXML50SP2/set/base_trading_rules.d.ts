import { ITickRules } from './tick_rules';
import { ILotTypeRules } from './lot_type_rules';
import { IPriceLimits } from './price_limits';
import { IPriceRangeRuleGrp } from './price_range_rule_grp';
import { IQuoteSizeRuleGrp } from './quote_size_rule_grp';
export interface IBaseTradingRules {
    ExpirationCycle?: number;
    TradeVolType?: number;
    MinTradeVol?: number;
    MaxTradeVol?: number;
    MaxPriceVariation?: number;
    ImpliedMarketIndicator?: number;
    TradingCurrency?: string;
    RoundLot?: number;
    MultilegModel?: number;
    MultilegPriceMethod?: number;
    PriceType?: number;
    FastMarketPercentage?: number;
    QuoteSideIndicator?: boolean;
    TickRules?: ITickRules[];
    LotTypeRules?: ILotTypeRules[];
    PriceLimits?: IPriceLimits;
    PriceRangeRuleGrp?: IPriceRangeRuleGrp[];
    QuoteSizeRuleGrp?: IQuoteSizeRuleGrp[];
}
