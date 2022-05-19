import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {OutcomesFormArrayElementKeys} from "./outcomes-form-array";

@Component({
  selector: 'mocha-outcomes-form-array',
  templateUrl: './outcomes-form-array.component.html',
  styleUrls: ['./outcomes-form-array.component.scss']
})
export class OutcomesFormArrayComponent implements OnInit {
  public readonly Keys = OutcomesFormArrayElementKeys;

  @Input() public formArray!: FormArray;

  public get forms(): FormGroup[] {
    return this.formArray.controls as FormGroup[];
  }

  public ngOnInit() {
    this.addFormGroup();
  }

  public addFormGroup(): void {
    this.formArray.push(new FormGroup({
      [OutcomesFormArrayElementKeys.Name]: new FormControl('', {validators: [Validators.required]}),
      [OutcomesFormArrayElementKeys.Value]: new FormControl(0, {validators: [Validators.required]})
    }))
  }

  public removeFormGroup(index: number): void {
    this.formArray.removeAt(index);
  }
}
