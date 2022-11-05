import {Injectable} from '@angular/core';
import {UntypedFormArray, UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {SimpleTableRowControlKey} from "../simple-table/common/simple-table-row-control.interface";
import {SimpleTableRowInterface} from "../simple-table/common/simple-table-row.interface";

@Injectable({
  providedIn: 'root'
})
export class SimpleInputTableService {
  public static attachControlsToFormArray(
    formArray: UntypedFormArray,
    elements: SimpleTableRowInterface[],
  ): UntypedFormArray {
    elements.forEach((element: SimpleTableRowInterface) => {
      formArray.push(
        new UntypedFormGroup({
          [SimpleTableRowControlKey.ID]: new UntypedFormControl(element.id ?? null),
          [SimpleTableRowControlKey.Name]: new UntypedFormControl(
            element.name ?? '',
            {validators: [Validators.required]}
          ),
          [SimpleTableRowControlKey.Value]: new UntypedFormControl(
            element.value ?? 0,
            {validators: [Validators.required]}
          )
        })
      );
    })

    return formArray;
  }
}
