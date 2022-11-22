import { IStandardHeader } from './set/standard_header';
import { IThrottleParamsGrp } from './set/throttle_params_grp';
export interface IUserResponse {
    UserRequestID: string;
    Username: string;
    UserStatus?: number;
    UserStatusText?: string;
    StandardHeader?: IStandardHeader;
    ThrottleParamsGrp?: IThrottleParamsGrp[];
}
