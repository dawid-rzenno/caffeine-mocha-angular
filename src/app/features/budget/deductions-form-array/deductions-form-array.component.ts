import {Component, Input} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {IncomeFormArrayElementKeys} from "../incomes-form-array/incomes-form-array";

@Component({
  selector: 'mocha-deductions-form-array',
  templateUrl: './deductions-form-array.component.html',
  styleUrls: ['./deductions-form-array.component.scss']
})
export class DeductionsFormArrayComponent {
  public readonly Keys = IncomeFormArrayElementKeys;

  @Input() public formArray!: FormArray;

  public get forms(): FormGroup[] {
    return this.formArray.controls as FormGroup[];
  }

  public addFormGroup(): void {
    this.formArray.push(new FormGroup({
      [IncomeFormArrayElementKeys.Name]: new FormControl('', {validators: [Validators.required]}),
      [IncomeFormArrayElementKeys.Value]: new FormControl(0, {validators: [Validators.required]})
    }))
  }

  public removeFormGroup(index: number): void {
    this.formArray.removeAt(index);
  }

}
