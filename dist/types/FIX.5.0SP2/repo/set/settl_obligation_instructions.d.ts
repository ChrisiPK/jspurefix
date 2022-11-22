import { IInstrument } from './instrument';
import { IParties } from './parties';
import { ISettlDetails } from './settl_details';
export interface ISettlObligationInstructions {
    NetGrossInd?: number;
    SettlObligID?: string;
    SettlObligTransType?: string;
    SettlObligRefID?: string;
    CcyAmt?: number;
    SettlCurrAmt?: number;
    Currency?: string;
    SettlCurrency?: string;
    SettlCurrFxRate?: number;
    SettlDate?: Date;
    Instrument?: IInstrument;
    Parties?: IParties[];
    EffectiveTime?: Date;
    ExpireTime?: Date;
    LastUpdateTime?: Date;
    SettlDetails?: ISettlDetails[];
}
