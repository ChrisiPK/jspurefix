/// <reference types="node" />
export interface ICommissionDataGrp {
    CommissionAmount?: number;
    CommissionAmountType?: number;
    CommissionBasis?: string;
    CommissionCurrency?: string;
    CommissionUnitOfMeasure?: string;
    CommissionUnitOfMeasureCurrency?: string;
    CommissionRate?: number;
    CommissionSharedIndicator?: boolean;
    CommissionAmountShared?: number;
    CommissionLegRefID?: string;
    CommissionDesc?: string;
    EncodedCommissionDescLen?: number;
    EncodedCommissionDesc?: Buffer;
}
