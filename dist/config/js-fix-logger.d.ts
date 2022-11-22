export interface IJsFixLogger {
    info(message: string): void;
    warning(message: string): void;
    debug(message: string): void;
    error(e: Error): void;
}
export declare class EmptyLogger implements IJsFixLogger {
    readonly type: string;
    constructor(type?: string);
    info(message: string): void;
    warning(message: string): void;
    debug(message: string): void;
    error(error: Error): void;
}
export declare function makeEmptyLogger(type: string): EmptyLogger;
