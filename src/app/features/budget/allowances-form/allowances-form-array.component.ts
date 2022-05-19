import {Component, Input} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {IncomeFormKeys} from "../incomes-form/incomes-form";

@Component({
  selector: 'mocha-allowances-form-array',
  templateUrl: './allowances-form-array.component.html',
  styleUrls: ['./allowances-form-array.component.scss']
})
export class AllowancesFormArrayComponent {
  public readonly Keys = IncomeFormKeys;

  @Input() public formArray!: FormArray;

  public get forms(): FormGroup[] {
    return this.formArray.controls as FormGroup[];
  }

  public addFormGroup(): void {
    this.formArray.push(new FormGroup({
      [IncomeFormKeys.Name]: new FormControl('', {validators: [Validators.required]}),
      [IncomeFormKeys.Value]: new FormControl(0, {validators: [Validators.required]})
    }))
  }

  public removeFormGroup(index: number): void {
    this.formArray.removeAt(index);
  }
}
