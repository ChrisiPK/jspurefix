import { INestedParties } from './nested_parties';
export interface IApplIDRequestGrp {
    RefApplID?: string;
    RefApplReqID?: string;
    ApplBegSeqNum?: number;
    ApplEndSeqNum?: number;
    NestedParties?: INestedParties[];
}
