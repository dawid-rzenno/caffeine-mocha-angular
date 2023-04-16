import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BudgetDetailsFormGroupKey} from "./common/budget-details-form-group.model";
import {NestedFormGroupAbstract} from "../common/nested-form-group.abstract";
import {BudgetDetailsFormService} from "./budget-details-form.service";

@Component({
  selector: 'mocha-budget-details-form-group',
  templateUrl: './budget-details-form-group.component.html',
  styleUrls: ['./budget-details-form-group.component.scss'],
  providers: [BudgetDetailsFormService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BudgetDetailsFormGroupComponent extends NestedFormGroupAbstract {
  public readonly FormGroupKey = BudgetDetailsFormGroupKey;
}
