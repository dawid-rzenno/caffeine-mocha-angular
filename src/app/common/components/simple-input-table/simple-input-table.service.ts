import {Injectable} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {SimpleTableRowControlKey} from "../simple-table/common/simple-table-row-control.interface";
import {SimpleTableRowInterface} from "../simple-table/common/simple-table-row.interface";

@Injectable({
  providedIn: 'root'
})
export class SimpleInputTableService {
  public static attachControlsToFormArray(
    formArray: FormArray,
    elements: SimpleTableRowInterface[],
  ): FormArray {
    elements.forEach((element: SimpleTableRowInterface) => {
      formArray.push(
        new FormGroup({
          [SimpleTableRowControlKey.ID]: new FormControl(element.id ?? null),
          [SimpleTableRowControlKey.Name]: new FormControl(
            element.name ?? '',
            {validators: [Validators.required]}
          ),
          [SimpleTableRowControlKey.Value]: new FormControl(
            element.value ?? 0,
            {validators: [Validators.required]}
          )
        })
      );
    })

    return formArray;
  }
}
