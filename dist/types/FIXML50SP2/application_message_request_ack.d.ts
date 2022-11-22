/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IApplIDRequestAckGrp } from './set/appl_id_request_ack_grp';
import { IParties } from './set/parties';
export interface IApplicationMessageRequestAck {
    ApplResponseID: string;
    ApplReqID?: string;
    ApplReqType?: number;
    ApplResponseType?: number;
    ApplTotalMessageCount?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardHeader?: IStandardHeader;
    ApplIDRequestAckGrp?: IApplIDRequestAckGrp[];
    Parties?: IParties[];
}
