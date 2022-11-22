import { IStandardHeader } from './set/standard_header';
import { ISettlementAmountGrp } from './set/settlement_amount_grp';
import { IMarginAmount } from './set/margin_amount';
import { IParties } from './set/parties';
import { ICollateralAmountGrp } from './set/collateral_amount_grp';
import { IPayCollectGrp } from './set/pay_collect_grp';
import { IPositionAmountData } from './set/position_amount_data';
export interface IAccountSummaryReport {
    AccountSummaryReportID: string;
    ClearingBusinessDate: Date;
    Currency?: string;
    TotalNetValue?: number;
    MarginExcess?: number;
    SettlSessID?: string;
    SettlSessSubID?: string;
    TransactTime?: Date;
    StandardHeader?: IStandardHeader;
    SettlementAmountGrp?: ISettlementAmountGrp[];
    MarginAmount?: IMarginAmount[];
    Parties?: IParties[];
    CollateralAmountGrp?: ICollateralAmountGrp[];
    PayCollectGrp?: IPayCollectGrp[];
    PositionAmountData?: IPositionAmountData[];
}
