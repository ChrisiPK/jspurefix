import { ContainedFieldSet } from '../contained'
import { SimpleFieldDefinition } from './simple-field-definition'
import { ContainedSetType } from '../contained-set-type'

export class GroupFieldDefinition extends ContainedFieldSet {
  constructor (public readonly name: string,
               public readonly abbreviation: string,
               public readonly category: string,
               public readonly noOfField: SimpleFieldDefinition,
               public readonly description: string) {
    super(ContainedSetType.Group, name, abbreviation, category, description)
    if (this.noOfField) {
      this.containedTag[this.noOfField.tag] = true
    }
  }

  public getPrefix (): string {
    return `G`
  }
}
