/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IParties } from './set/parties';
import { IMDRjctGrp } from './set/md_rjct_grp';
import { IStandardTrailer } from './set/standard_trailer';
export interface IMarketDataRequestReject {
    StandardHeader: IStandardHeader;
    MDReqID: string;
    Parties?: IParties[];
    MDReqRejReason?: string;
    MDRjctGrp?: IMDRjctGrp[];
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardTrailer: IStandardTrailer;
}
