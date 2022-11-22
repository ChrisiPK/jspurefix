/// <reference types="node" />
import { FixDefinitions } from './definition';
import * as events from 'events';
export declare abstract class FixParser extends events.EventEmitter {
    abstract parse(): Promise<FixDefinitions>;
}
