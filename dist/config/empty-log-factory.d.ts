import { IJsFixLogger } from './js-fix-logger';
import { JsFixLoggerFactory } from './js-fix-logger-factory';
export declare class EmptyLogFactory extends JsFixLoggerFactory {
    logger(type: string): IJsFixLogger;
    plain(fileName: string, maxSize?: number): IJsFixLogger;
}
