import {Component} from '@angular/core';
import {BudgetDetailsFormKeys} from "./budget-details-form-group";
import {InnerFormGroup} from "../abstracts/inner-form-group.abstract";

@Component({
  selector: 'mocha-budget-details-form-group',
  templateUrl: './budget-details-form-group.component.html',
  styleUrls: ['./budget-details-form-group.component.scss'],
})
export class BudgetDetailsFormGroupComponent extends InnerFormGroup {
  public readonly Keys = BudgetDetailsFormKeys;
}
