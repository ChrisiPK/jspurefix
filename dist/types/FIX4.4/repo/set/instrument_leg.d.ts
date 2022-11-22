/// <reference types="node" />
import { ILegSecAltIDGrp } from './leg_sec_alt_id_grp';
export interface IInstrumentLeg {
    LegSymbol?: string;
    LegSymbolSfx?: string;
    LegSecurityID?: string;
    LegSecurityIDSource?: string;
    LegSecAltIDGrp?: ILegSecAltIDGrp[];
    LegProduct?: number;
    LegCFICode?: string;
    LegSecurityType?: string;
    LegSecuritySubType?: string;
    LegMaturityMonthYear?: string;
    LegMaturityDate?: Date;
    LegCouponPaymentDate?: Date;
    LegIssueDate?: Date;
    LegRepoCollateralSecurityType?: string;
    LegRepurchaseTerm?: number;
    LegRepurchaseRate?: number;
    LegFactor?: number;
    LegCreditRating?: string;
    LegInstrRegistry?: string;
    LegCountryOfIssue?: string;
    LegStateOrProvinceOfIssue?: string;
    LegLocaleOfIssue?: string;
    LegRedemptionDate?: Date;
    LegStrikePrice?: number;
    LegStrikeCurrency?: string;
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
    LegCurrency?: string;
    LegPool?: string;
    LegDatedDate?: Date;
    LegContractSettlMonth?: string;
    LegInterestAccrualDate?: Date;
}
