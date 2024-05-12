import {Injectable} from '@angular/core';
import {UntypedFormArray, UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {SimpleTableRow} from "../simple-table/common/simple-table-row";
import { SimpleTableRowControlKeys } from "../simple-table/common/simple-table-row-control-keys";

@Injectable({
  providedIn: 'root'
})
export class SimpleInputTableService {
  public static attachControlsToFormArray(
    formArray: UntypedFormArray,
    elements: SimpleTableRow[],
  ): UntypedFormArray {
    elements.forEach((element: SimpleTableRow) => {
      formArray.push(
        new UntypedFormGroup({
          [SimpleTableRowControlKeys.ID]: new UntypedFormControl(element.id ?? null),
          [SimpleTableRowControlKeys.Name]: new UntypedFormControl(
            element.name ?? '',
            {validators: [Validators.required]}
          ),
          [SimpleTableRowControlKeys.Value]: new UntypedFormControl(
            element.value ?? 0,
            {validators: [Validators.required]}
          )
        })
      );
    })

    return formArray;
  }
}
