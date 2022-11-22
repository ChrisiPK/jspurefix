import { ILegAdditionalTermBondRefGrp } from './leg_additional_term_bond_ref_grp';
export interface ILegAdditionalTermGrp {
    LegAdditionalTermConditionPrecedentBondIndicator?: boolean;
    LegAdditionalTermDiscrepancyClauseIndicator?: boolean;
    LegAdditionalTermBondRefGrp?: ILegAdditionalTermBondRefGrp[];
}
