/// <reference types="node" />
import { IParties } from './parties';
import { IPartyDetailGrp } from './party_detail_grp';
import { ILimitAmts } from './limit_amts';
import { IClrInstGrp } from './clr_inst_grp';
import { ISideRegulatoryTradeIDGrp } from './side_regulatory_trade_id_grp';
import { ICommissionData } from './commission_data';
import { ICommissionDataGrp } from './commission_data_grp';
import { IContAmtGrp } from './cont_amt_grp';
import { IStipulations } from './stipulations';
import { IMiscFeesGrp } from './misc_fees_grp';
import { ITrdAllocGrp } from './trd_alloc_grp';
import { ISideTrdRegTS } from './side_trd_reg_ts';
import { ISettlDetails } from './settl_details';
import { ITradeReportOrderDetail } from './trade_report_order_detail';
import { ITradePositionQty } from './trade_position_qty';
import { IRelatedTradeGrp } from './related_trade_grp';
import { IRelatedPositionGrp } from './related_position_grp';
import { ISideCollateralAmountGrp } from './side_collateral_amount_grp';
export interface ITrdCapRptSideGrp {
    Side: string;
    ShortMarkingExemptIndicator?: boolean;
    SideExecID?: string;
    OrderDelay?: number;
    OrderDelayUnit?: number;
    SideLastQty?: number;
    SideClearingTradePrice?: number;
    SidePriceDifferential?: number;
    SideClearingTradePriceType?: number;
    SideTradeReportID?: string;
    SideTradeID?: string;
    SideOrigTradeID?: string;
    SideFillStationCd?: string;
    SideReasonCd?: string;
    RptSeq?: number;
    SideTrdSubTyp?: number;
    NetGrossInd?: number;
    SideCurrency?: string;
    SideSettlCurrency?: string;
    Account?: string;
    AcctIDSource?: number;
    AccountType?: number;
    ProcessCode?: string;
    OddLot?: boolean;
    SideTradeReportingIndicator?: number;
    FirmTradeEventID?: string;
    TradeInputSource?: string;
    TradeInputDevice?: string;
    ComplianceID?: string;
    ComplianceText?: string;
    EncodedComplianceTextLen?: number;
    EncodedComplianceText?: Buffer;
    SolicitedFlag?: boolean;
    CustOrderCapacity?: number;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    TimeBracket?: string;
    RemunerationIndicator?: number;
    NumDaysInterest?: number;
    ExDate?: Date;
    AccruedInterestRate?: number;
    AccruedInterestAmt?: number;
    InterestAtMaturity?: number;
    EndAccruedInterestAmt?: number;
    StartCash?: number;
    EndCash?: number;
    Concession?: number;
    TotalTakedown?: number;
    NetMoney?: number;
    SettlCurrAmt?: number;
    SettlCurrFxRate?: number;
    SettlCurrFxRateCalc?: string;
    PositionEffect?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    SideMultiLegReportingType?: number;
    ExchangeRule?: string;
    TradeAllocIndicator?: number;
    TradeAllocGroupInstruction?: number;
    SideAvgPxIndicator?: number;
    SideAvgPxGroupID?: string;
    SideAvgPx?: number;
    PreallocMethod?: string;
    AllocID?: string;
    SideGrossTradeAmt?: number;
    AggressorIndicator?: boolean;
    ExchangeSpecialInstructions?: string;
    SideShortSaleExemptionReason?: number;
    OrderCategory?: string;
    SideLiquidityInd?: number;
    StrategyLinkID?: string;
    CustOrderHandlingInst?: string;
    OrderHandlingInstSource?: number;
    BlockTrdAllocIndicator?: number;
    SideRiskLimitCheckStatus?: number;
    LastCapacity?: string;
    RefRiskLimitCheckID?: string;
    RefRiskLimitCheckIDType?: number;
    CompressionGroupID?: string;
    Parties?: IParties[];
    PartyDetailGrp?: IPartyDetailGrp[];
    LimitAmts?: ILimitAmts[];
    ClrInstGrp?: IClrInstGrp[];
    SideRegulatoryTradeIDGrp?: ISideRegulatoryTradeIDGrp[];
    CommissionData?: ICommissionData;
    CommissionDataGrp?: ICommissionDataGrp[];
    ContAmtGrp?: IContAmtGrp[];
    Stipulations?: IStipulations[];
    MiscFeesGrp?: IMiscFeesGrp[];
    TrdAllocGrp?: ITrdAllocGrp[];
    SideTrdRegTS?: ISideTrdRegTS[];
    SettlDetails?: ISettlDetails[];
    TradeReportOrderDetail?: ITradeReportOrderDetail;
    TradePositionQty?: ITradePositionQty[];
    RelatedTradeGrp?: IRelatedTradeGrp[];
    RelatedPositionGrp?: IRelatedPositionGrp[];
    SideCollateralAmountGrp?: ISideCollateralAmountGrp[];
}