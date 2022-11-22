/// <reference types="node" />
import { SAXOptions, SAXParser } from 'sax';
import * as stream from 'stream';
import { FixDefinitions } from './definition';
export declare type IDictDoneCb = (err: Error, done: FixDefinitions) => void;
export declare class SAXStream extends stream.Duplex {
    _parser: SAXParser;
    constructor(strict: boolean, opt: SAXOptions);
}
