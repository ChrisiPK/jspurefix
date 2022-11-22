/// <reference types="node" />
import { IParties } from './parties';
import { ITradeCaptureReportNoSidesNoClearingInstructions } from './trade_capture_report_no_sides_no_clearing_instructions';
import { ICommissionData } from './commission_data';
import { ITradeCaptureReportNoSidesNoContAmts } from './trade_capture_report_no_sides_no_cont_amts';
import { ITradeCaptureReportNoSidesNoMiscFees } from './trade_capture_report_no_sides_no_misc_fees';
export interface ITradeCaptureReportNoSides {
    Side: string;
    OrderID: string;
    SecondaryOrderID?: string;
    ClOrdID?: string;
    Parties: IParties;
    Account?: string;
    AccountType?: number;
    ProcessCode?: string;
    OddLot?: boolean;
    NoClearingInstructions?: ITradeCaptureReportNoSidesNoClearingInstructions[];
    ClearingFeeIndicator?: string;
    TradeInputSource?: string;
    TradeInputDevice?: string;
    Currency?: string;
    ComplianceID?: string;
    SolicitedFlag?: boolean;
    OrderCapacity?: string;
    OrderRestrictions?: string;
    CustOrderCapacity?: number;
    TransBkdTime?: Date;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    CommissionData: ICommissionData;
    GrossTradeAmt?: number;
    NumDaysInterest?: number;
    ExDate?: string;
    AccruedInterestRate?: number;
    AccruedInterestAmt?: number;
    Concession?: number;
    TotalTakedown?: number;
    NetMoney?: number;
    SettlCurrAmt?: number;
    SettlCurrency?: string;
    SettlCurrFxRate?: number;
    SettlCurrFxRateCalc?: string;
    PositionEffect?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    MultiLegReportingType?: string;
    NoContAmts?: ITradeCaptureReportNoSidesNoContAmts[];
    NoMiscFees?: ITradeCaptureReportNoSidesNoMiscFees[];
}
