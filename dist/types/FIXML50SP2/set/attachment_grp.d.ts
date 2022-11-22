/// <reference types="node" />
import { IAttachmentKeywordGrp } from './attachment_keyword_grp';
export interface IAttachmentGrp {
    AttachmentName?: string;
    AttachmentMediaType?: string;
    AttachmentClassification?: string;
    AttachmentExternalURL?: string;
    AttachmentEncodingType?: number;
    UnencodedAttachmentLen?: number;
    EncodedAttachmentLen?: number;
    EncodedAttachment?: Buffer;
    AttachmentKeywordGrp?: IAttachmentKeywordGrp[];
}
