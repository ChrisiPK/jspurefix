import { IUnderlyingAdditionalTermBondRefGrp } from './underlying_additional_term_bond_ref_grp';
export interface IUnderlyingAdditionalTermGrp {
    UnderlyingAdditionalTermConditionPrecedentBondIndicator?: boolean;
    UnderlyingAdditionalTermDiscrepancyClauseIndicator?: boolean;
    UnderlyingAdditionalTermBondRefGrp?: IUnderlyingAdditionalTermBondRefGrp[];
}
