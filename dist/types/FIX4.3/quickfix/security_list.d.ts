import { IStandardHeader } from './set/standard_header';
import { ISecurityListNoRelatedSym } from './set/security_list_no_related_sym';
import { IStandardTrailer } from './set/standard_trailer';
export interface ISecurityList {
    StandardHeader: IStandardHeader;
    SecurityReqID: string;
    SecurityResponseID: string;
    SecurityRequestResult: number;
    TotalNumSecurities?: number;
    NoRelatedSym?: ISecurityListNoRelatedSym[];
    StandardTrailer: IStandardTrailer;
}
