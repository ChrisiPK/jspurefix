import { IStandardHeader } from './set/standard_header';
import { IStandardTrailer } from './set/standard_trailer';
export interface IAllocationInstructionAck {
    StandardHeader: IStandardHeader;
    ClientID?: string;
    ExecBroker?: string;
    AllocID: string;
    TradeDate: string;
    TransactTime?: string;
    AllocStatus: number;
    AllocRejCode?: number;
    Text?: string;
    StandardTrailer: IStandardTrailer;
}
