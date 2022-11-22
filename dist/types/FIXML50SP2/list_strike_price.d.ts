import { IStandardHeader } from './set/standard_header';
import { IInstrmtStrkPxGrp } from './set/instrmt_strk_px_grp';
export interface IListStrikePrice {
    ListID: string;
    TotNoStrikes: number;
    LastFragment?: boolean;
    StandardHeader?: IStandardHeader;
    InstrmtStrkPxGrp?: IInstrmtStrkPxGrp[];
}
