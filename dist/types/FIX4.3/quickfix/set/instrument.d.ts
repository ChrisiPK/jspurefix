/// <reference types="node" />
import { IInstrumentNoSecurityAltID } from './instrument_no_security_alt_id';
export interface IInstrument {
    Symbol?: string;
    SymbolSfx?: string;
    SecurityID?: string;
    SecurityIDSource?: string;
    NoSecurityAltID?: IInstrumentNoSecurityAltID[];
    Product?: number;
    CFICode?: string;
    SecurityType?: string;
    MaturityMonthYear?: string;
    MaturityDate?: Date;
    CouponPaymentDate?: string;
    IssueDate?: string;
    RepoCollateralSecurityType?: string;
    RepurchaseTerm?: number;
    RepurchaseRate?: number;
    Factor?: number;
    CreditRating?: string;
    InstrRegistry?: string;
    CountryOfIssue?: string;
    StateOrProvinceOfIssue?: string;
    LocaleOfIssue?: string;
    RedemptionDate?: string;
    StrikePrice?: number;
    OptAttribute?: string;
    ContractMultiplier?: number;
    CouponRate?: number;
    SecurityExchange?: string;
    Issuer?: string;
    EncodedIssuerLen?: number;
    EncodedIssuer?: Buffer;
    SecurityDesc?: string;
    EncodedSecurityDescLen?: number;
    EncodedSecurityDesc?: Buffer;
}
