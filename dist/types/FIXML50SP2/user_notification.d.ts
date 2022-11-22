/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IUsernameGrp } from './set/username_grp';
import { IThrottleParamsGrp } from './set/throttle_params_grp';
export interface IUserNotification {
    UserStatus: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardHeader?: IStandardHeader;
    UsernameGrp?: IUsernameGrp[];
    ThrottleParamsGrp?: IThrottleParamsGrp[];
}
