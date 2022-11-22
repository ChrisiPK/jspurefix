/// <reference types="node" />
export interface IAllocCommissionDataGrp {
    AllocCommissionAmount?: number;
    AllocCommissionAmountType?: number;
    AllocCommissionBasis?: string;
    AllocCommissionCurrency?: string;
    AllocCommissionUnitOfMeasure?: string;
    AllocCommissionUnitOfMeasureCurrency?: string;
    AllocCommissionRate?: number;
    AllocCommissionSharedIndicator?: boolean;
    AllocCommissionAmountShared?: number;
    AllocCommissionLegRefID?: string;
    AllocCommissionDesc?: string;
    EncodedAllocCommissionDescLen?: number;
    EncodedAllocCommissionDesc?: Buffer;
}
