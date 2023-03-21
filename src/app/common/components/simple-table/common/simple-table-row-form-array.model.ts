import {FormArray} from "@angular/forms";
import {SimpleTableRowFormGroup} from "./simple-table-row-form-group.model";

export class SimpleTableRowFormArray extends FormArray<SimpleTableRowFormGroup> {
}

export type SimpleTableRowFormArrayValues = SimpleTableRowFormGroup[];
