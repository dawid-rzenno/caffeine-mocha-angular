import {Component, Input} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {ContributorFormKeys} from "./contributor-form";

@Component({
  selector: 'mocha-contributors-form-array',
  templateUrl: './contributors-form-array.component.html',
  styleUrls: ['./contributors-form-array.component.scss']
})
export class ContributorsFormArrayComponent {
  public readonly Keys = ContributorFormKeys;

  @Input() public formArray!: FormArray;

  public get forms(): FormGroup[] {
    return this.formArray.controls as FormGroup[];
  }

  public addFormGroup(): void {
    this.formArray.push(new FormGroup({
      [ContributorFormKeys.Name]: new FormControl('', {validators: [Validators.required]}),
      [ContributorFormKeys.Incomes]: new FormArray([]),
      [ContributorFormKeys.Allowances]: new FormArray([]),
      [ContributorFormKeys.Deductions]: new FormArray([]),
    }))
  }

  public removeFormGroup(index: number): void {
    this.formArray.removeAt(index);
  }

  public getFormArray(formGroup: FormGroup, controlName: ContributorFormKeys): FormArray {
    return formGroup.get(controlName) as FormArray;
  }
}
