import { ILegPhysicalSettlDeliverableObligationGrp } from './leg_physical_settl_deliverable_obligation_grp';
export interface ILegPhysicalSettlTermGrp {
    LegPhysicalSettlCurency?: string;
    LegPhysicalSettlBusinessDays?: number;
    LegPhysicalSettlMaximumBusinessDays?: number;
    LegPhysicalSettlTermXID?: string;
    LegPhysicalSettlDeliverableObligationGrp?: ILegPhysicalSettlDeliverableObligationGrp[];
}
