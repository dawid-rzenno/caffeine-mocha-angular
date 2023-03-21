import {FormControl, FormGroup} from "@angular/forms";
import {FormControlValue, ID} from "../../../types/id.type";

export enum SimpleTableRowFormGroupKey {
  ID = 'id',
  Name = 'name',
  Value = 'value'
}

export type SimpleTableRowFormGroupControls = {
  [SimpleTableRowFormGroupKey.ID]: FormControl<FormControlValue<ID>>;
  [SimpleTableRowFormGroupKey.Name]: FormControl<FormControlValue<string>>;
  [SimpleTableRowFormGroupKey.Value]: FormControl<FormControlValue<number>>;
}

export class SimpleTableRowFormGroup extends FormGroup<SimpleTableRowFormGroupControls> {
}

export type SimpleTableRowFormGroupValue = {
  [SimpleTableRowFormGroupKey.ID]: FormControlValue<ID>;
  [SimpleTableRowFormGroupKey.Name]: FormControlValue<string>;
  [SimpleTableRowFormGroupKey.Value]: FormControlValue<number>;
}

export type SimpleTableRow = {
  id: ID;
  name: string;
  value: number;
}
