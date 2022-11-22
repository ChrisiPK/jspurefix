export interface ITriggeringInstruction {
    TriggerType?: string;
    TriggerAction?: string;
    TriggerPrice?: number;
    TriggerSymbol?: string;
    TriggerSecurityID?: string;
    TriggerSecurityIDSource?: string;
    TriggerSecurityDesc?: string;
    TriggerPriceType?: string;
    TriggerPriceTypeScope?: string;
    TriggerPriceDirection?: string;
    TriggerNewPrice?: number;
    TriggerOrderType?: string;
    TriggerNewQty?: number;
    TriggerTradingSessionID?: string;
    TriggerTradingSessionSubID?: string;
}
