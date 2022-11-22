import { ISessionDescription, ISessionMsgFactory } from '../transport/';
import { IJsFixConfig, JsFixLoggerFactory } from '../config';
import { DefinitionFactory } from '../util/';
export declare class RuntimeFactory {
    readonly definitionFactory: DefinitionFactory;
    readonly logFactory: JsFixLoggerFactory;
    readonly msgFactory: ISessionMsgFactory;
    readonly description: ISessionDescription;
    constructor(definitionFactory: DefinitionFactory, logFactory: JsFixLoggerFactory, msgFactory: ISessionMsgFactory, description: ISessionDescription);
    makeConfig(): Promise<IJsFixConfig>;
}
