import { IInstrumentScopeSecurityAltIDGrp } from './instrument_scope_security_alt_id_grp';
export interface IRiskInstrumentScopeGrp {
    InstrumentScopeOperator?: number;
    InstrumentScopeSymbol?: string;
    InstrumentScopeSymbolSfx?: string;
    InstrumentScopeSecurityID?: string;
    InstrumentScopeSecurityIDSource?: string;
    InstrumentScopeProduct?: number;
    InstrumentScopeProductComplex?: string;
    InstrumentScopeSecurityGroup?: string;
    InstrumentScopeCFICode?: string;
    InstrumentScopeSecurityType?: string;
    InstrumentScopeSecuritySubType?: string;
    InstrumentScopeMaturityMonthYear?: string;
    InstrumentScopeMaturityTime?: string;
    InstrumentScopeRestructuringType?: string;
    InstrumentScopeSeniority?: string;
    InstrumentScopePutOrCall?: number;
    InstrumentScopeFlexibleIndicator?: boolean;
    InstrumentScopeCouponRate?: number;
    InstrumentScopeSecurityExchange?: string;
    InstrumentScopeSecurityDesc?: string;
    SettlType?: string;
    InstrumentScopeSecurityAltIDGrp?: IInstrumentScopeSecurityAltIDGrp[];
}
