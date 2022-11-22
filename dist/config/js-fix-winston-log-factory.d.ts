import { IJsFixLogger } from './js-fix-logger';
import { JsFixLoggerFactory } from './js-fix-logger-factory';
export declare class JsFixWinstonLogFactory extends JsFixLoggerFactory {
    readonly options: any;
    private wl;
    constructor(options?: any);
    logger(type: string): IJsFixLogger;
    plain(fileName: string, maxSize?: number): IJsFixLogger;
}
