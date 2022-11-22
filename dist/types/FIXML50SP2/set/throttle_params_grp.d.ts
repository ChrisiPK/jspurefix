import { IThrottleMsgTypeGrp } from './throttle_msg_type_grp';
export interface IThrottleParamsGrp {
    ThrottleAction?: number;
    ThrottleType?: number;
    ThrottleNoMsgs?: number;
    ThrottleTimeInterval?: number;
    ThrottleTimeUnit?: number;
    ThrottleMsgTypeGrp?: IThrottleMsgTypeGrp[];
}
