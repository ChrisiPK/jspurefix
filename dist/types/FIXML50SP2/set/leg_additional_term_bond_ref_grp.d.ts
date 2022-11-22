/// <reference types="node" />
export interface ILegAdditionalTermBondRefGrp {
    LegAdditionalTermBondSecurityID?: string;
    SecurityIDSource?: string;
    LegAdditionalTermBondDesc?: string;
    EncodedLegAdditionalTermBondDescLen?: number;
    EncodedLegAdditionalTermBondDesc?: Buffer;
    LegAdditionalTermBondCurrency?: string;
    LegAdditionalTermBondIssuer?: string;
    EncodedLegAdditionalTermBondIssuerLen?: number;
    EncodedLegAdditionalTermBondIssuer?: Buffer;
    LegAdditionalTermBondSeniority?: string;
    LegAdditionalTermBondCouponType?: number;
    LegAdditionalTermBondCouponRate?: number;
    LegAdditionalTermBondMaturityDate?: Date;
    LegAdditionalTermBondParValue?: number;
    LegAdditionalTermBondCurrentTotalIssuedAmount?: number;
    LegAdditionalTermBondCouponFrequencyPeriod?: number;
    LegAdditionalTermBondCouponFrequencyUnit?: string;
    AdditionalTermBondDayCount?: number;
}
