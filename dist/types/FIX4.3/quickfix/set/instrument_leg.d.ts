/// <reference types="node" />
import { IInstrumentLegNoLegSecurityAltID } from './instrument_leg_no_leg_security_alt_id';
export interface IInstrumentLeg {
    LegSymbol?: string;
    LegSymbolSfx?: string;
    LegSecurityID?: string;
    LegSecurityIDSource?: string;
    NoLegSecurityAltID?: IInstrumentLegNoLegSecurityAltID[];
    LegProduct?: number;
    LegCFICode?: string;
    LegSecurityType?: string;
    LegMaturityMonthYear?: string;
    LegMaturityDate?: Date;
    LegCouponPaymentDate?: string;
    LegIssueDate?: string;
    LegRepoCollateralSecurityType?: string;
    LegRepurchaseTerm?: number;
    LegRepurchaseRate?: number;
    LegFactor?: number;
    LegCreditRating?: string;
    LegInstrRegistry?: string;
    LegCountryOfIssue?: string;
    LegStateOrProvinceOfIssue?: string;
    LegLocaleOfIssue?: string;
    LegRedemptionDate?: string;
    LegStrikePrice?: number;
    LegOptAttribute?: string;
    LegContractMultiplier?: number;
    LegCouponRate?: number;
    LegSecurityExchange?: string;
    LegIssuer?: string;
    EncodedLegIssuerLen?: number;
    EncodedLegIssuer?: Buffer;
    LegSecurityDesc?: string;
    EncodedLegSecurityDescLen?: number;
    EncodedLegSecurityDesc?: Buffer;
    LegRatioQty?: number;
    LegSide?: string;
}
