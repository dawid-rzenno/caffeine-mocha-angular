import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BudgetDetailsControlKey} from "./common/budget-details-control.interface";
import {NestedFormGroupAbstract} from "../common/nested-form-group.abstract";
import {BudgetDetailsControlService} from "./budget-details-control.service";

@Component({
  selector: 'mocha-budget-details-control',
  templateUrl: './budget-details-control.component.html',
  styleUrls: ['./budget-details-control.component.scss'],
  providers: [BudgetDetailsControlService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BudgetDetailsControlComponent extends NestedFormGroupAbstract {
  public readonly ControlKey = BudgetDetailsControlKey;
}
