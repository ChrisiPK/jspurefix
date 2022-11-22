/// <reference types="node" />
export interface IAdditionalTermBondRefGrp {
    AdditionalTermBondSecurityID?: string;
    SecurityIDSource?: string;
    AdditionalTermBondDesc?: string;
    EncodedAdditionalTermBondDescLen?: number;
    EncodedAdditionalTermBondDesc?: Buffer;
    AdditionalTermBondCurrency?: string;
    AdditionalTermBondIssuer?: string;
    EncodedAdditionalTermBondIssuerLen?: number;
    EncodedAdditionalTermBondIssuer?: Buffer;
    AdditionalTermBondSeniority?: string;
    AdditionalTermBondCouponType?: number;
    AdditionalTermBondCouponRate?: number;
    AdditionalTermBondMaturityDate?: Date;
    AdditionalTermBondParValue?: number;
    AdditionalTermBondCurrentTotalIssuedAmount?: number;
    AdditionalTermBondCouponFrequencyPeriod?: number;
    AdditionalTermBondCouponFrequencyUnit?: string;
    AdditionalTermBondDayCount?: number;
}
