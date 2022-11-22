import { INestedParties } from './nested_parties';
export interface IApplIDRequestAckGrp {
    RefApplID?: string;
    RefApplReqID?: string;
    ApplBegSeqNum?: number;
    ApplEndSeqNum?: number;
    RefApplLastSeqNum?: number;
    ApplResponseError?: number;
    NestedParties?: INestedParties[];
}
