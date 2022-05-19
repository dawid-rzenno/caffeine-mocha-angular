import {Component, Input} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {OutcomesInputGroupKeys} from "./outcomes-input-group.model";

@Component({
  selector: 'mocha-outcomes-form-array',
  templateUrl: './outcomes-form-array.component.html',
  styleUrls: ['./outcomes-form-array.component.scss']
})
export class OutcomesFormArrayComponent {
  public readonly Keys = OutcomesInputGroupKeys;

  @Input() public formArray!: FormArray;

  public get forms(): FormGroup[] {
    return this.formArray.controls as FormGroup[];
  }

  public addFormGroup(): void {
    this.formArray.push(new FormGroup({
      [OutcomesInputGroupKeys.Name]: new FormControl('', {validators: [Validators.required]}),
      [OutcomesInputGroupKeys.Value]: new FormControl(0, {validators: [Validators.required]})
    }))
  }

  public removeFormGroup(index: number): void {
    this.formArray.removeAt(index);
  }
}
