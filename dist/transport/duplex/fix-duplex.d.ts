/// <reference types="node" />
import { Readable, Writable } from 'stream';
export declare abstract class FixDuplex {
    readable: Readable;
    writable: Writable;
    abstract end(): void;
}
