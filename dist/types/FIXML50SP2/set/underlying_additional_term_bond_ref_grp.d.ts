/// <reference types="node" />
export interface IUnderlyingAdditionalTermBondRefGrp {
    UnderlyingAdditionalTermBondSecurityID?: string;
    SecurityIDSource?: string;
    UnderlyingAdditionalTermBondDesc?: string;
    EncodedUnderlyingAdditionalTermBondDescLen?: number;
    EncodedUnderlyingAdditionalTermBondDesc?: Buffer;
    UnderlyingAdditionalTermBondCurrency?: string;
    UnderlyingAdditionalTermBondIssuer?: string;
    EncodedUnderlyingAdditionalTermBondIssuerLen?: number;
    EncodedUnderlyingAdditionalTermBondIssuer?: Buffer;
    UnderlyingAdditionalTermBondSeniority?: string;
    UnderlyingAdditionalTermBondCouponType?: number;
    UnderlyingAdditionalTermBondCouponRate?: number;
    UnderlyingAdditionalTermBondMaturityDate?: Date;
    UnderlyingAdditionalTermBondParValue?: number;
    UnderlyingAdditionalTermBondCurrentTotalIssuedAmount?: number;
    UnderlyingAdditionalTermBondCouponFrequencyPeriod?: number;
    UnderlyingAdditionalTermBondCouponFrequencyUnit?: string;
    AdditionalTermBondDayCount?: number;
}
