/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IUsernameGrp } from './set/username_grp';
import { IStandardTrailer } from './set/standard_trailer';
export interface IUserNotification {
    StandardHeader: IStandardHeader;
    UsernameGrp?: IUsernameGrp[];
    UserStatus: number;
    Text?: string;
    EncodedTextLen?: number;
    EncodedText?: Buffer;
    StandardTrailer: IStandardTrailer;
}
