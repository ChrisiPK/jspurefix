import { ILegStreamEffectiveDateBusinessCenterGrp } from './leg_stream_effective_date_business_center_grp';
export interface ILegStreamEffectiveDate {
    LegStreamEffectiveDateUnadjusted?: Date;
    LegStreamEffectiveDateBusinessDayConvention?: number;
    LegStreamEffectiveDateRelativeTo?: number;
    LegStreamEffectiveDateOffsetPeriod?: number;
    LegStreamEffectiveDateOffsetUnit?: string;
    LegStreamEffectiveDateOffsetDayType?: number;
    LegStreamEffectiveDateAdjusted?: Date;
    LegStreamEffectiveDateBusinessCenterGrp?: ILegStreamEffectiveDateBusinessCenterGrp[];
}
