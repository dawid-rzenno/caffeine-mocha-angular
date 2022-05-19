import {Component, Input} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {ContributorFormArrayElementKeys} from "./contributors-form-array";

@Component({
  selector: 'mocha-contributors-form-array',
  templateUrl: './contributors-form-array.component.html',
  styleUrls: ['./contributors-form-array.component.scss']
})
export class ContributorsFormArrayComponent {
  public readonly Keys = ContributorFormArrayElementKeys;

  @Input() public formArray!: FormArray;

  public get forms(): FormGroup[] {
    return this.formArray.controls as FormGroup[];
  }

  public addFormGroup(): void {
    this.formArray.push(new FormGroup({
      [ContributorFormArrayElementKeys.Name]: new FormControl('', {validators: [Validators.required]}),
      [ContributorFormArrayElementKeys.Incomes]: new FormArray([]),
      [ContributorFormArrayElementKeys.Allowances]: new FormArray([]),
      [ContributorFormArrayElementKeys.Deductions]: new FormArray([]),
    }))
  }

  public removeFormGroup(index: number): void {
    this.formArray.removeAt(index);
  }

  public getFormArray(formGroup: FormGroup, controlName: ContributorFormArrayElementKeys): FormArray {
    return formGroup.get(controlName) as FormArray;
  }
}
