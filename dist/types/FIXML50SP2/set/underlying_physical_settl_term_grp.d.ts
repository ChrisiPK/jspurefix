import { IUnderlyingPhysicalSettlDeliverableObligationGrp } from './underlying_physical_settl_deliverable_obligation_grp';
export interface IUnderlyingPhysicalSettlTermGrp {
    UnderlyingPhysicalSettlCurrency?: string;
    UnderlyingPhysicalSettlBusinessDays?: number;
    UnderlyingPhysicalSettlMaximumBusinessDays?: number;
    UnderlyingPhysicalSettlTermXID?: string;
    UnderlyingPhysicalSettlDeliverableObligationGrp?: IUnderlyingPhysicalSettlDeliverableObligationGrp[];
}
