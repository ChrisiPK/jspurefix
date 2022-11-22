/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
import { IStandardTrailer } from './set/standard_trailer';
export interface IUserRequest {
    StandardHeader: IStandardHeader;
    UserRequestID: string;
    UserRequestType: number;
    Username: string;
    Password?: string;
    NewPassword?: string;
    RawDataLength?: number;
    RawData?: Buffer;
    StandardTrailer: IStandardTrailer;
}
