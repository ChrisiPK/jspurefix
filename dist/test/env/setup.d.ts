import { FixDefinitions } from '../../dictionary/definition';
import { SessionContainer } from '../../runtime';
import { ISessionDescription, ISessionMsgFactory, MsgTransmitter } from '../../transport';
import { DependencyContainer } from 'tsyringe';
import { IJsFixConfig } from '../../config';
import { FileReplayer } from '../../util';
import { ElasticBuffer, MsgView } from '../../buffer';
import { AsciiParser } from '../../buffer/ascii';
import { ParsingResult } from './parsing-result';
export declare class TestEntity {
    readonly sessionPath: string;
    readonly fixContainer: SessionContainer;
    readonly description: ISessionDescription;
    sessionContainer: DependencyContainer;
    config: IJsFixConfig;
    replayer: FileReplayer;
    rxBuffer: ElasticBuffer;
    txBuffer: ElasticBuffer;
    transmitter: MsgTransmitter;
    sessionMsgFactory: ISessionMsgFactory;
    constructor(sessionPath: string);
    getViews(fix?: string): Promise<MsgView[]>;
    getAsciiParser(text: string, chunks?: boolean): AsciiParser;
    parseText(text: string, chunks?: boolean): Promise<ParsingResult>;
    make(): Promise<void>;
}
export declare class Setup {
    readonly clientPath: string;
    readonly serverPath: string;
    definitions: FixDefinitions;
    client: TestEntity;
    server: TestEntity;
    clientConfig: IJsFixConfig;
    serverConfig: IJsFixConfig;
    clientDescription: ISessionDescription;
    clientSessionContainer: DependencyContainer;
    constructor(clientPath?: string, serverPath?: string);
    init(): Promise<void>;
}
