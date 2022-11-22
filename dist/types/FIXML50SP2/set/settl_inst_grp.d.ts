import { IParties } from './parties';
import { ISettlInstructionsData } from './settl_instructions_data';
export interface ISettlInstGrp {
    SettlInstID?: string;
    SettlInstTransType?: string;
    SettlInstRefID?: string;
    Side?: string;
    Product?: number;
    SecurityType?: string;
    CFICode?: string;
    SettlCurrency?: string;
    EffectiveTime?: Date;
    ExpireTime?: Date;
    LastUpdateTime?: Date;
    PaymentMethod?: number;
    PaymentRef?: string;
    CardHolderName?: string;
    CardNumber?: string;
    CardStartDate?: Date;
    CardExpDate?: Date;
    CardIssNum?: string;
    PaymentDate?: Date;
    PaymentRemitterID?: string;
    Parties?: IParties[];
    SettlInstructionsData?: ISettlInstructionsData;
}
