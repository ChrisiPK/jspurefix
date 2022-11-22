import { IPhysicalSettlDeliverableObligationGrp } from './physical_settl_deliverable_obligation_grp';
export interface IPhysicalSettlTermGrp {
    PhysicalSettlCurrency?: string;
    PhysicalSettlBusinessDays?: number;
    PhysicalSettlMaximumBusinessDays?: number;
    PhysicalSettlTermXID?: string;
    PhysicalSettlDeliverableObligationGrp?: IPhysicalSettlDeliverableObligationGrp[];
}
