/// <reference types="node" />
import { IUnderlyingInstrumentNoUnderlyingSecurityAltID } from './underlying_instrument_no_underlying_security_alt_id';
export interface IUnderlyingInstrument {
    UnderlyingSymbol?: string;
    UnderlyingSymbolSfx?: string;
    UnderlyingSecurityID?: string;
    UnderlyingSecurityIDSource?: string;
    NoUnderlyingSecurityAltID?: IUnderlyingInstrumentNoUnderlyingSecurityAltID[];
    UnderlyingProduct?: number;
    UnderlyingCFICode?: string;
    UnderlyingSecurityType?: string;
    UnderlyingMaturityMonthYear?: string;
    UnderlyingMaturityDate?: Date;
    UnderlyingPutOrCall?: number;
    UnderlyingCouponPaymentDate?: string;
    UnderlyingIssueDate?: string;
    UnderlyingRepoCollateralSecurityType?: string;
    UnderlyingRepurchaseTerm?: number;
    UnderlyingRepurchaseRate?: number;
    UnderlyingFactor?: number;
    UnderlyingCreditRating?: string;
    UnderlyingInstrRegistry?: string;
    UnderlyingCountryOfIssue?: string;
    UnderlyingStateOrProvinceOfIssue?: string;
    UnderlyingLocaleOfIssue?: string;
    UnderlyingRedemptionDate?: string;
    UnderlyingStrikePrice?: number;
    UnderlyingOptAttribute?: string;
    UnderlyingContractMultiplier?: number;
    UnderlyingCouponRate?: number;
    UnderlyingSecurityExchange?: string;
    UnderlyingIssuer?: string;
    EncodedUnderlyingIssuerLen?: number;
    EncodedUnderlyingIssuer?: Buffer;
    UnderlyingSecurityDesc?: string;
    EncodedUnderlyingSecurityDescLen?: number;
    EncodedUnderlyingSecurityDesc?: Buffer;
}
