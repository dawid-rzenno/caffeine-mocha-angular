import {Component, Input} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {OutcomesInputKeys} from "./outcomes-input.model";

@Component({
  selector: 'mocha-outcomes-form-array',
  templateUrl: './outcomes-form-array.component.html',
  styleUrls: ['./outcomes-form-array.component.scss']
})
export class OutcomesFormArrayComponent {
  public readonly Keys = OutcomesInputKeys;

  @Input() public formArray!: FormArray;

  public get forms(): FormGroup[] {
    return this.formArray.controls as FormGroup[];
  }

  public addFormGroup(): void {
    this.formArray.push(new FormGroup({
      [OutcomesInputKeys.Name]: new FormControl('', {validators: [Validators.required]}),
      [OutcomesInputKeys.Value]: new FormControl(0, {validators: [Validators.required]})
    }))
  }

  public removeFormGroup(index: number): void {
    this.formArray.removeAt(index);
  }
}
