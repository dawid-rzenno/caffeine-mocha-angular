import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NestedFormGroupComponent} from "../common/nested-form-group-component";
import {BudgetGeneralControlService} from "./budget-general-control.service";
import { BudgetGeneralControlKeys } from "./common/budget-general-control-keys";

@Component({
  selector: 'mocha-budget-general-control',
  templateUrl: './budget-general-control.component.html',
  styleUrls: ['./budget-general-control.component.scss'],
  providers: [BudgetGeneralControlService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BudgetGeneralControlComponent extends NestedFormGroupComponent {
  public readonly ControlKey = BudgetGeneralControlKeys;
}
