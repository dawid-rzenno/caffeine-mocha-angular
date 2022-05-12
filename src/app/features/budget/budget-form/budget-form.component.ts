import {Component} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {FormComponent} from "../../../models/form-component.abstract";
import {BudgetFormKeys} from "./budget-form";
import {BudgetService} from "../budget.service";

@Component({
  selector: 'mocha-budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.scss']
})
export class BudgetFormComponent extends FormComponent {
  public readonly Keys = BudgetFormKeys

  constructor(protected fb: FormBuilder, private service: BudgetService) {
    super();
    this.form = fb.group({
      [BudgetFormKeys.Name]: '',
      [BudgetFormKeys.Outcomes]: [],
      [BudgetFormKeys.Contributors]: []
    })
  }

  public onCreate(): void {
    this.service.create(this.form.getRawValue()).subscribe();
  }
}
