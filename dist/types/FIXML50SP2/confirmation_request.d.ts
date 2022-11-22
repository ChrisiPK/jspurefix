/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IOrdAllocGrp } from './set/ord_alloc_grp';
export interface IConfirmationRequest {
    ConfirmReqID: string;
    ConfirmType: number;
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
    StandardHeader?: IStandardHeader;
    OrdAllocGrp?: IOrdAllocGrp[];
}
