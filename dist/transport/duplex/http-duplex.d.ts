import { FixDuplex } from './fix-duplex';
import { IHttpAdapter } from '../http/http-adapter';
export declare class HttpDuplex extends FixDuplex {
    readonly adapter: IHttpAdapter;
    constructor(adapter: IHttpAdapter);
    private static makeReadable;
    private makeWritable;
    end(): void;
}
