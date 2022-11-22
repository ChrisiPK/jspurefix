import { IStandardHeader } from './set/standard_header';
import { IStandardTrailer } from './set/standard_trailer';
export interface IUserResponse {
    StandardHeader: IStandardHeader;
    UserRequestID: string;
    Username: string;
    UserStatus?: number;
    UserStatusText?: string;
    StandardTrailer: IStandardTrailer;
}
