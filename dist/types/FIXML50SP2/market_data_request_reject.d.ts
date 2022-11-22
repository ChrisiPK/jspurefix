/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { IMDRjctGrp } from './set/md_rjct_grp';
export interface IMarketDataRequestReject {
    MDReqID: string;
    MDReqRejReason?: string;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardHeader?: IStandardHeader;
    Parties?: IParties[];
    MDRjctGrp?: IMDRjctGrp[];
}
