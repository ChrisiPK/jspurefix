/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IApplIDRequestGrp } from './set/appl_id_request_grp';
import { IParties } from './set/parties';
export interface IApplicationMessageRequest {
    ApplReqID: string;
    ApplReqType: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardHeader?: IStandardHeader;
    ApplIDRequestGrp?: IApplIDRequestGrp[];
    Parties?: IParties[];
}
