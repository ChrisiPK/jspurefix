import { IStandardHeader } from './set/standard_header';
import { IInstrument } from './set/instrument';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
import { IInstrmtLegGrp } from './set/instrmt_leg_grp';
import { IMDFullGrp } from './set/md_full_grp';
import { IStandardTrailer } from './set/standard_trailer';
export interface IMarketDataSnapshotFullRefresh {
    StandardHeader: IStandardHeader;
    MDReqID?: string;
    Instrument: IInstrument;
    UndInstrmtGrp?: IUndInstrmtGrp[];
    InstrmtLegGrp?: IInstrmtLegGrp[];
    FinancialStatus?: string;
    CorporateAction?: string;
    NetChgPrevDay?: number;
    MDFullGrp: IMDFullGrp[];
    ApplQueueDepth?: number;
    ApplQueueResolution?: number;
    StandardTrailer: IStandardTrailer;
}
