import { IUnderlyingLegSecurityAltIDGrp } from './underlying_leg_security_alt_id_grp';
export interface IUnderlyingLegInstrument {
    UnderlyingLegSymbol?: string;
    UnderlyingLegSymbolSfx?: string;
    UnderlyingLegSecurityID?: string;
    UnderlyingLegSecurityIDSource?: string;
    UnderlyingLegSecurityAltIDGrp?: IUnderlyingLegSecurityAltIDGrp[];
    UnderlyingLegCFICode?: string;
    UnderlyingLegSecurityType?: string;
    UnderlyingLegSecuritySubType?: string;
    UnderlyingLegMaturityMonthYear?: string;
    UnderlyingLegMaturityDate?: Date;
    UnderlyingLegMaturityTime?: string;
    UnderlyingLegStrikePrice?: number;
    UnderlyingLegOptAttribute?: string;
    UnderlyingLegPutOrCall?: number;
    UnderlyingLegSecurityExchange?: string;
    UnderlyingLegSecurityDesc?: string;
}
