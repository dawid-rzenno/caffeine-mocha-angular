import {Injectable} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {
  SimpleTableRow,
  SimpleTableRowFormGroup,
  SimpleTableRowFormGroupKey
} from "../simple-table/common/simple-table-row-form-group.model";
import {SimpleTableRowFormArray} from "../simple-table/common/simple-table-row-form-array.model";
import {FormControlValue, ID} from "../../types/id.type";

@Injectable({
  providedIn: 'root'
})
export class SimpleInputTableFormService {

  public static createFormArray(
    simpleTableRows: FormControlValue<SimpleTableRow[]>,
  ): SimpleTableRowFormArray {

    return new SimpleTableRowFormArray(
      !simpleTableRows ? [] : simpleTableRows.map(
        (simpleTableRow: SimpleTableRow) => SimpleInputTableFormService.createFormGroup(simpleTableRow)
      )
    );
  }

  static pushEmptyFormGroupToFormArray(formArray: SimpleTableRowFormArray): void {
    formArray.push(SimpleInputTableFormService.createFormGroup(null));
  }

  private static createFormGroup(simpleTableRow: FormControlValue<SimpleTableRow>): SimpleTableRowFormGroup {
    let id: FormControlValue<ID> = null;
    let name: FormControlValue<string> = null;
    let value: FormControlValue<number> = null;

    if (simpleTableRow) {
      id = simpleTableRow.id;
      name = simpleTableRow.name;
      value = simpleTableRow.value;
    }

    return new SimpleTableRowFormGroup({
      [SimpleTableRowFormGroupKey.ID]: new FormControl(id),
      [SimpleTableRowFormGroupKey.Name]: new FormControl(name, Validators.required),
      [SimpleTableRowFormGroupKey.Value]: new FormControl(value, Validators.required)
    })
  }
}
