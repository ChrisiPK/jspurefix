import { ISecurityTradingRules } from './security_trading_rules';
import { IStrikeRules } from './strike_rules';
export interface IMarketSegmentGrp {
    MarketID?: string;
    MarketSegmentID?: string;
    SecurityTradingRules?: ISecurityTradingRules;
    StrikeRules?: IStrikeRules[];
}
