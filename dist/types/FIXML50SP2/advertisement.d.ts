/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IInstrument } from './set/instrument';
import { IInstrumentExtension } from './set/instrument_extension';
import { IFinancingDetails } from './set/financing_details';
import { IInstrmtLegGrp } from './set/instrmt_leg_grp';
import { IUndInstrmtGrp } from './set/und_instrmt_grp';
import { IRelatedInstrumentGrp } from './set/related_instrument_grp';
export interface IAdvertisement {
    AdvId: string;
    AdvTransType: string;
    AdvRefID?: string;
    AdvSide: string;
    Quantity: number;
    QtyType?: number;
    Price?: number;
    Currency?: string;
    TradeDate?: Date;
    TransactTime?: Date;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    URLLink?: string;
    LastMkt?: string;
    TradingSessionID?: string;
    TradingSessionSubID?: string;
    StandardHeader?: IStandardHeader;
    Instrument?: IInstrument;
    InstrumentExtension?: IInstrumentExtension;
    FinancingDetails?: IFinancingDetails;
    InstrmtLegGrp?: IInstrmtLegGrp[];
    UndInstrmtGrp?: IUndInstrmtGrp[];
    RelatedInstrumentGrp?: IRelatedInstrumentGrp[];
}
