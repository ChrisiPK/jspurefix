import { ITradingSessionRules } from './trading_session_rules';
export interface ITradingSessionRulesGrp {
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    TradingSessionRules?: ITradingSessionRules;
}
