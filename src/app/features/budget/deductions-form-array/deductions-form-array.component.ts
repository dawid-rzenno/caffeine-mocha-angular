import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {IncomeFormArrayElementKeys} from "../incomes-form-array/incomes-form-array";
import {InnerFormArray} from "../abstracts/inner-form-array.abstract";

@Component({
  selector: 'mocha-deductions-form-array',
  templateUrl: './deductions-form-array.component.html',
  styleUrls: ['./deductions-form-array.component.scss']
})
export class DeductionsFormArrayComponent extends InnerFormArray {
  public readonly Keys = IncomeFormArrayElementKeys;

  protected get newFormGroup(): FormGroup {
    return new FormGroup({
      [IncomeFormArrayElementKeys.Name]: new FormControl(''),
      [IncomeFormArrayElementKeys.Value]: new FormControl(0)
    })
  }
}
