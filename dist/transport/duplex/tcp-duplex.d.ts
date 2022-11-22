/// <reference types="node" />
import { FixDuplex } from './fix-duplex';
import * as net from 'net';
export declare class TcpDuplex extends FixDuplex {
    readonly socket: net.Socket;
    constructor(socket: net.Socket);
    end(): void;
}
