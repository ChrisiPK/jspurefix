/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IOrdAllocGrp } from './set/ord_alloc_grp';
import { IStandardTrailer } from './set/standard_trailer';
export interface IConfirmationRequest {
    StandardHeader: IStandardHeader;
    ConfirmReqID: string;
    ConfirmType: number;
    OrdAllocGrp?: IOrdAllocGrp[];
    AllocID?: string;
    SecondaryAllocID?: string;
    IndividualAllocID?: string;
    TransactTime: Date;
    AllocAccount?: string;
    AllocAcctIDSource?: number;
    AllocAccountType?: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardTrailer: IStandardTrailer;
}
