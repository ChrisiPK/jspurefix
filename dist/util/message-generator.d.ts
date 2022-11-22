import { ILooseObject } from '../collections/collection';
import { FixDefinitions, SimpleFieldDefinition } from '../dictionary/definition';
export declare class MessageGenerator {
    readonly words: string[];
    readonly definitions: FixDefinitions;
    private word;
    private length;
    constructor(words: string[], definitions: FixDefinitions);
    static getRandomEnum(field: SimpleFieldDefinition): string | number | boolean;
    private static randomIntFromInterval;
    private static makeRandomString;
    private static makeBuffer;
    generate(msgType: string, density?: number, repeatGroups?: boolean): ILooseObject;
    private toObject;
    private createSimple;
    private nextString;
}
