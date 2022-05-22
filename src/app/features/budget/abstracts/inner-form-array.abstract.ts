import {Directive, EventEmitter, Input, Output} from "@angular/core";
import {FormArray, FormGroup} from "@angular/forms";
import {ContributorFormArrayElementKeys} from "../contributors-form-array/contributors-form-array";

@Directive()
export abstract class InnerFormArray {
  public abstract readonly Keys: {[k: string]: any};

  @Input() public formArray!: FormArray;

  @Output() public formArrayElementSubmission: EventEmitter<null> = new EventEmitter<null>();

  public get forms(): FormGroup[] {
    return this.formArray.controls as FormGroup[];
  }

  protected abstract get newFormGroup(): FormGroup;

  public addFormGroup(): void {
    this.formArray.push(this.newFormGroup);
  }

  public removeFormGroup(index: number): void {
    this.formArray.removeAt(index);
  }

  public getFormArray(formGroup: FormGroup, controlName: ContributorFormArrayElementKeys): FormArray {
    return formGroup.get(controlName) as FormArray;
  }
}
