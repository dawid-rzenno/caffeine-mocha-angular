import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {OutcomesFormArrayElementKeys} from "./outcomes-form-array";
import {InnerFormArray} from "../abstracts/inner-form-array.abstract";
import {IncomeFormArrayElementKeys} from "../incomes-form-array/incomes-form-array";

@Component({
  selector: 'mocha-outcomes-form-array',
  templateUrl: './outcomes-form-array.component.html',
  styleUrls: ['./outcomes-form-array.component.scss']
})
export class OutcomesFormArrayComponent extends InnerFormArray implements OnInit {
  public readonly Keys = OutcomesFormArrayElementKeys;

  public ngOnInit() {
    this.addFormGroup();
  }

  protected get newFormGroup(): FormGroup {
    return new FormGroup({
      [IncomeFormArrayElementKeys.Name]: new FormControl('', {validators: [Validators.required]}),
      [IncomeFormArrayElementKeys.Value]: new FormControl(0, {validators: [Validators.required]})
    })
  }
}
