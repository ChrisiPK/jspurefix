import { INestedParties3 } from './nested_parties_3';
export interface ITrdInstrmtLegExecGrp {
    LegRefID?: string;
    LegExecID?: string;
    LegExecRefID?: string;
    LegTradeID?: string;
    LegTradeReportID?: string;
    LegOrderQty?: number;
    LegPositionEffect?: string;
    LegCoveredOrUncovered?: number;
    LegLastPx?: number;
    LegPriceType?: number;
    LegSettlCurrency?: string;
    LegShortSaleExemptionReason?: number;
    LegLastQty?: number;
    LegQtyType?: number;
    NestedParties3?: INestedParties3[];
}
