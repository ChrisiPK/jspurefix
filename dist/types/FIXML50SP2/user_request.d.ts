/// <reference types="node" />
import { IStandardHeader } from './set/standard_header';
export interface IUserRequest {
    UserRequestID: string;
    UserRequestType: number;
    Username: string;
    Password?: string;
    NewPassword?: string;
    EncryptedPasswordMethod?: number;
    EncryptedPasswordLen?: number;
    EncryptedPassword?: Buffer;
    EncryptedNewPasswordLen?: number;
    EncryptedNewPassword?: Buffer;
    RawDataLength?: number;
    RawData?: Buffer;
    StandardHeader?: IStandardHeader;
}
