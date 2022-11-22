import { IParties } from './parties';
import { ISettlInstructionsData } from './settl_instructions_data';
export interface ISettlInstGrp {
    SettlInstID?: string;
    SettlInstTransType?: string;
    SettlInstRefID?: string;
    Parties?: IParties[];
    Side?: string;
    Product?: number;
    SecurityType?: string;
    CFICode?: string;
    EffectiveTime?: Date;
    ExpireTime?: Date;
    LastUpdateTime?: Date;
    SettlInstructionsData?: ISettlInstructionsData;
    PaymentMethod?: number;
    PaymentRef?: string;
    CardHolderName?: string;
    CardNumber?: string;
    CardStartDate?: Date;
    CardExpDate?: Date;
    CardIssNum?: string;
    PaymentDate?: Date;
    PaymentRemitterID?: string;
}
