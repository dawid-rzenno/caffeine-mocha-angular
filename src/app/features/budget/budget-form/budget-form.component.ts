import {Component} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {FormComponent} from "../../../models/form-component.abstract";
import {BudgetFormKeys} from "./budget-form";

@Component({
  selector: 'mocha-budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.scss']
})
export class BudgetFormComponent extends FormComponent {
  public readonly Keys = BudgetFormKeys

  constructor(protected fb: FormBuilder) {
    super();
    this.form = fb.group({
      [BudgetFormKeys.Name]: '',
      [BudgetFormKeys.Outcomes]: [],
      [BudgetFormKeys.Contributors]: []
    })
  }
}
