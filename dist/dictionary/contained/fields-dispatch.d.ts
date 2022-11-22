import { ContainedField } from './contained-field';
import { IFieldDispatcher } from './field-dispatcher';
export declare class FieldsDispatch {
    dispatchField(field: ContainedField, dispatcher: IFieldDispatcher): void;
    dispatchFields(fields: ContainedField[], dispatcher: IFieldDispatcher): void;
}
