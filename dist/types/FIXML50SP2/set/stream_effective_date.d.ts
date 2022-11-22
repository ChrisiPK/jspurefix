import { IStreamEffectiveBusinessCenterGrp } from './stream_effective_business_center_grp';
export interface IStreamEffectiveDate {
    StreamEffectiveDateUnadjusted?: Date;
    StreamEffectiveDateBusinessDayConvention?: number;
    StreamEffectiveDateRelativeTo?: number;
    StreamEffectiveDateOffsetPeriod?: number;
    StreamEffectiveDateOffsetUnit?: string;
    StreamEffectiveDateOffsetDayType?: number;
    StreamEffectiveDateAdjusted?: Date;
    StreamEffectiveBusinessCenterGrp?: IStreamEffectiveBusinessCenterGrp[];
}
