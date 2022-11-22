import { IStandardHeader } from './set/standard_header';
import { ISecListGrp } from './set/sec_list_grp';
import { IStandardTrailer } from './set/standard_trailer';
export interface ISecurityList {
    StandardHeader: IStandardHeader;
    SecurityReqID: string;
    SecurityResponseID: string;
    SecurityRequestResult: number;
    TotNoRelatedSym?: number;
    LastFragment?: boolean;
    SecListGrp?: ISecListGrp[];
    StandardTrailer: IStandardTrailer;
}
