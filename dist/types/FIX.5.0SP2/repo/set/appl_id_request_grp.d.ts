import { INestedParties } from './nested_parties';
export interface IApplIDRequestGrp {
    RefApplID?: string;
    ApplBegSeqNum?: number;
    ApplEndSeqNum?: number;
    NestedParties?: INestedParties[];
    RefApplReqID?: string;
}
