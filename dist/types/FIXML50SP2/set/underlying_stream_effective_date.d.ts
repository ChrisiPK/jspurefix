import { IUnderlyingStreamEffectiveDateBusinessCenterGrp } from './underlying_stream_effective_date_business_center_grp';
export interface IUnderlyingStreamEffectiveDate {
    UnderlyingStreamEffectiveDateUnadjusted?: Date;
    UnderlyingStreamEffectiveDateBusinessDayConvention?: number;
    UnderlyingStreamEffectiveDateRelativeTo?: number;
    UnderlyingStreamEffectiveDateOffsetPeriod?: number;
    UnderlyingStreamEffectiveDateOffsetUnit?: string;
    UnderlyingStreamEffectiveDateOffsetDayType?: number;
    UnderlyingStreamEffectiveDateAdjusted?: Date;
    UnderlyingStreamEffectiveDateBusinessCenterGrp?: IUnderlyingStreamEffectiveDateBusinessCenterGrp[];
}
