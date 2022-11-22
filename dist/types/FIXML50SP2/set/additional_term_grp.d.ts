import { IAdditionalTermBondRefGrp } from './additional_term_bond_ref_grp';
export interface IAdditionalTermGrp {
    AdditionalTermConditionPrecedentBondIndicator?: boolean;
    AdditionalTermDiscrepancyClauseIndicator?: boolean;
    AdditionalTermBondRefGrp?: IAdditionalTermBondRefGrp[];
}
