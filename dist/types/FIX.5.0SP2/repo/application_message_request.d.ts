/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IApplIDRequestGrp } from './set/appl_id_request_grp';
import { IStandardTrailer } from './set/standard_trailer';
import { IParties } from './set/parties';
export interface IApplicationMessageRequest {
    StandardHeader: IStandardHeader;
    ApplReqID: string;
    ApplReqType: number;
    ApplIDRequestGrp?: IApplIDRequestGrp[];
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardTrailer: IStandardTrailer;
    Parties?: IParties[];
}
