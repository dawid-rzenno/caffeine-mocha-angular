import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IncomeFormArrayElementKeys} from "./incomes-form-array";
import {InnerFormArray} from "../abstracts/inner-form-array.abstract";

@Component({
  selector: 'mocha-incomes-form-array',
  templateUrl: './incomes-form-array.component.html',
  styleUrls: ['./incomes-form-array.component.scss']
})
export class IncomesFormArrayComponent extends InnerFormArray implements OnInit {
  public readonly Keys = IncomeFormArrayElementKeys;

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
