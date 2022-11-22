import { IRiskWarningLevelGrp } from './risk_warning_level_grp';
export interface IRiskLimitTypesGrp {
    MiscFeeType?: string;
    RiskLimitAmount?: number;
    RiskLimitAction?: number;
    RiskLimitUtilizationAmount?: number;
    RiskLimitUtilizationPercent?: number;
    RiskLimitCurrency?: string;
    RiskLimitPlatform?: string;
    RiskLimitVelocityPeriod?: number;
    RiskLimitVelocityUnit?: string;
    RiskWarningLevelGrp?: IRiskWarningLevelGrp[];
}
