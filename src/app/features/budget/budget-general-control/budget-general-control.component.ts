import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BudgetGeneralControlKey} from "./common/budget-general-control.interface";
import {NestedFormGroupAbstract} from "../common/nested-form-group.abstract";
import {BudgetGeneralControlService} from "./budget-general-control.service";

@Component({
  selector: 'mocha-budget-general-control',
  templateUrl: './budget-general-control.component.html',
  styleUrls: ['./budget-general-control.component.scss'],
  providers: [BudgetGeneralControlService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BudgetGeneralControlComponent extends NestedFormGroupAbstract {
  public readonly ControlKey = BudgetGeneralControlKey;
}
