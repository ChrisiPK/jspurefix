/// <reference types="node" />
import { ConnectionOptions, TlsOptions } from 'tls';
import { ITlsOptions } from './tls-options';
import { ITcpTransportDescription } from './tcp-transport-description';
export declare class TlsOptionsFactory {
    static read(filePath: string): any;
    static getTlsOptions(tls: ITlsOptions): TlsOptions;
    static getTlsConnectionOptions(tcp: ITcpTransportDescription): ConnectionOptions;
}
