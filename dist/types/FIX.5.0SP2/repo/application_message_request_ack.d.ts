/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IApplIDRequestAckGrp } from './set/appl_id_request_ack_grp';
import { IStandardTrailer } from './set/standard_trailer';
import { IParties } from './set/parties';
export interface IApplicationMessageRequestAck {
    StandardHeader: IStandardHeader;
    ApplResponseID: string;
    ApplReqID?: string;
    ApplReqType?: number;
    ApplResponseType?: number;
    ApplTotalMessageCount?: number;
    ApplIDRequestAckGrp?: IApplIDRequestAckGrp[];
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardTrailer: IStandardTrailer;
    Parties?: IParties[];
}
