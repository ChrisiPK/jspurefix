import { INumericKeyed } from '../../collections/collection';
import { Dictionary } from '../../collections';
import { ComponentFieldDefinition } from './component-field-definition';
import { MessageDefinition } from './message-definition';
import { SimpleFieldDefinition } from './simple-field-definition';
import { FixVersion } from '../fix-versions';
import { CategorySimpleSet } from './category-simple-set';
import { ContainedFieldSet } from '../contained';
import { FixDefinitionSource } from '../fix-definition-source';
export declare class FixDefinitions {
    readonly source: FixDefinitionSource;
    readonly version: FixVersion;
    readonly simple: Dictionary<SimpleFieldDefinition>;
    readonly component: Dictionary<ComponentFieldDefinition>;
    readonly message: Dictionary<MessageDefinition>;
    readonly tagToSimple: INumericKeyed<SimpleFieldDefinition>;
    readonly categorySimple: Dictionary<CategorySimpleSet>;
    constructor(source: FixDefinitionSource, version: FixVersion);
    containedSet(type: string): ContainedFieldSet;
    addMessage(message: MessageDefinition): void;
    addComponentFieldDef(field: ComponentFieldDefinition): void;
    getSimple(name: string, cat?: string): SimpleFieldDefinition;
    addSimpleAlias(from: string, to: string): void;
    addSimpleFieldDef(field: SimpleFieldDefinition, typeName?: string): void;
    private assignCategory;
}
