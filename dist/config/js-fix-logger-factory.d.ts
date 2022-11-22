import { IJsFixLogger } from './js-fix-logger';
export declare abstract class JsFixLoggerFactory {
    abstract logger(type: string): IJsFixLogger;
    abstract plain(fileName: string, maxSize?: number): IJsFixLogger;
}
