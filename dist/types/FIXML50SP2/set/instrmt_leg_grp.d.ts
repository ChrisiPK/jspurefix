/// <reference types="node" />
import { ILegSecAltIDGrp } from './leg_sec_alt_id_grp';
import { ILegSecondaryAssetGrp } from './leg_secondary_asset_grp';
import { ILegAssetAttributeGrp } from './leg_asset_attribute_grp';
import { ILegSecurityXML } from './leg_security_xml';
import { ILegEvntGrp } from './leg_evnt_grp';
import { ILegInstrumentParties } from './leg_instrument_parties';
import { ILegComplexEvents } from './leg_complex_events';
import { ILegDateAdjustment } from './leg_date_adjustment';
import { ILegPricingDateTime } from './leg_pricing_date_time';
import { ILegMarketDisruption } from './leg_market_disruption';
import { ILegOptionExercise } from './leg_option_exercise';
import { ILegStreamGrp } from './leg_stream_grp';
import { ILegProvisionGrp } from './leg_provision_grp';
import { ILegAdditionalTermGrp } from './leg_additional_term_grp';
import { ILegProtectionTermGrp } from './leg_protection_term_grp';
import { ILegCashSettlTermGrp } from './leg_cash_settl_term_grp';
import { ILegPhysicalSettlTermGrp } from './leg_physical_settl_term_grp';
import { ILegExtraordinaryEventGrp } from './leg_extraordinary_event_grp';
export interface IInstrmtLegGrp {
    LegSymbol?: string;
    LegSymbolSfx?: string;
    LegSecurityID?: string;
    LegSecurityIDSource?: string;
    LegID?: string;
    LegProduct?: number;
    LegSecurityGroup?: string;
    LegCFICode?: string;
    LegSecurityType?: string;
    LegSecuritySubType?: string;
    LegMaturityMonthYear?: string;
    LegMaturityDate?: Date;
    LegMaturityTime?: string;
    LegSettleOnOpenFlag?: string;
    LegInstrmtAssignmentMethod?: string;
    LegSecurityStatus?: string;
    LegCouponPaymentDate?: Date;
    LegRestructuringType?: string;
    LegSeniority?: string;
    LegNotionalPercentageOutstanding?: number;
    LegOriginalNotionalPercentageOutstanding?: number;
    LegAttachmentPoint?: number;
    LegDetachmentPoint?: number;
    LegObligationType?: string;
    LegAssetGroup?: number;
    LegAssetClass?: number;
    AssetSubClass?: number;
    LegAssetType?: string;
    LegSwapClass?: string;
    LegSwapSubClass?: string;
    LegNthToDefault?: number;
    LegMthToDefault?: number;
    LegSettledEntityMatrixSource?: string;
    LegSettledEntityMatrixPublicationDate?: Date;
    LegCouponType?: number;
    LegTotalIssuedAmount?: number;
    LegCouponFrequencyPeriod?: number;
    LegCouponFrequencyUnit?: string;
    CouponDayCount?: number;
    LegConvertibleBondEquityID?: string;
    ConvertibleBondEquityIDSource?: string;
    LegContractPriceRefMonth?: string;
    LegLienSeniority?: number;
    LegLoanFacility?: number;
    LegReferenceEntityType?: number;
    LegIndexSeries?: number;
    LegIndexAnnexVersion?: number;
    LegIndexAnnexDate?: Date;
    LegIndexAnnexSource?: string;
    LegSettlRateIndex?: string;
    LegSettlRateIndexLocation?: string;
    LegOptionExpirationDesc?: string;
    EncodedLegOptionExpirationDescLen?: number;
    EncodedLegOptionExpirationDesc?: Buffer;
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
    LegStrikeMultiplier?: number;
    LegStrikeValue?: number;
    LegStrikeUnitOfMeasure?: string;
    LegStrikeIndex?: string;
    LegStrikeIndexCurvePoint?: string;
    LegStrikeIndexSpread?: number;
    LegStrikeIndexQuote?: number;
    LegStrikePriceDeterminationMethod?: number;
    LegStrikePriceBoundaryMethod?: number;
    LegStrikePriceBoundaryPrecision?: number;
    LegUnderlyingPriceDeterminationMethod?: number;
    LegOptAttribute?: string;
    LegContractMultiplier?: number;
    LegContractMultiplierUnit?: number;
    LegTradingUnitPeriodMultiplier?: number;
    FlowScheduleType?: number;
    LegMinPriceIncrement?: number;
    LegMinPriceIncrementAmount?: number;
    LegUnitOfMeasure?: string;
    LegUnitOfMeasureQty?: number;
    LegUnitOfMeasureCurrency?: string;
    LegPriceUnitOfMeasure?: string;
    LegPriceUnitOfMeasureQty?: number;
    LegPriceUnitOfMeasureCurrency?: string;
    LegSettlMethod?: string;
    LegTimeUnit?: string;
    LegExerciseStyle?: number;
    LegOptPayoutType?: number;
    LegOptPayoutAmount?: number;
    LegPriceQuoteMethod?: string;
    LegValuationMethod?: string;
    LegValuationSource?: string;
    LegValuationReferenceModel?: string;
    LegPriceQuoteCurrency?: string;
    LegListMethod?: number;
    LegCapPrice?: number;
    LegFloorPrice?: number;
    LegFlexibleIndicator?: boolean;
    LegFlexProductEligibilityIndicator?: boolean;
    LegCouponRate?: number;
    LegSecurityExchange?: string;
    LegPositionLimit?: number;
    LegNTPositionLimit?: number;
    LegIssuer?: string;
    EncodedLegIssuerLen?: number;
    EncodedLegIssuer?: Buffer;
    LegSecurityDesc?: string;
    EncodedLegSecurityDescLen?: number;
    EncodedLegSecurityDesc?: Buffer;
    CPProgram?: number;
    LegCPRegType?: string;
    LegRatioQty?: number;
    LegSide?: string;
    LegCurrency?: string;
    LegPool?: string;
    LegDatedDate?: Date;
    LegContractSettlMonth?: string;
    LegInterestAccrualDate?: Date;
    LegPutOrCall?: number;
    LegInTheMoneyCondition?: number;
    LegContraryInstructionEligibilityIndicator?: boolean;
    LegOptionRatio?: number;
    LegPrice?: number;
    LegShortSaleRestriction?: number;
    LegStrategyType?: string;
    LegCommonPricingIndicator?: boolean;
    LegSettlDisruptionProvision?: number;
    LegInstrumentRoundingDirection?: string;
    LegInstrumentRoundingPrecision?: number;
    LegExtraordinaryEventAdjustmentMethod?: number;
    LegExchangeLookAlike?: boolean;
    LegSecAltIDGrp?: ILegSecAltIDGrp[];
    LegSecondaryAssetGrp?: ILegSecondaryAssetGrp[];
    LegAssetAttributeGrp?: ILegAssetAttributeGrp[];
    LegSecurityXML?: ILegSecurityXML;
    LegEvntGrp?: ILegEvntGrp[];
    LegInstrumentParties?: ILegInstrumentParties[];
    LegComplexEvents?: ILegComplexEvents[];
    LegDateAdjustment?: ILegDateAdjustment;
    LegPricingDateTime?: ILegPricingDateTime;
    LegMarketDisruption?: ILegMarketDisruption;
    LegOptionExercise?: ILegOptionExercise;
    LegStreamGrp?: ILegStreamGrp[];
    LegProvisionGrp?: ILegProvisionGrp[];
    LegAdditionalTermGrp?: ILegAdditionalTermGrp[];
    LegProtectionTermGrp?: ILegProtectionTermGrp[];
    LegCashSettlTermGrp?: ILegCashSettlTermGrp[];
    LegPhysicalSettlTermGrp?: ILegPhysicalSettlTermGrp[];
    LegExtraordinaryEventGrp?: ILegExtraordinaryEventGrp[];
}
