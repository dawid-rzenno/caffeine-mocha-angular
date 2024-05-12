import {Component} from '@angular/core';
import {UntypedFormArray, UntypedFormGroup} from "@angular/forms";
import {BudgetFormService} from "./budget-form.service";
import {RoutedFormComponent} from "../common/routed-form-component";
import {StatusService} from "../../../core/status/status.service";
import {ActivatedRoute} from "@angular/router";
import { BudgetControlKeys } from "./common/budget-control-keys";

@Component({
  selector: 'mocha-budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.scss'],
  providers: [BudgetFormService]
})
export class BudgetFormComponent extends RoutedFormComponent {
  public readonly FormKey = BudgetControlKeys;

  constructor(
    private formService: BudgetFormService,
    protected override activatedRoute: ActivatedRoute,
    public override statusService: StatusService
  ) {
    super(activatedRoute, statusService);
  }

  public get detailsFormGroup(): UntypedFormGroup {
    return this.formGroup.get(BudgetControlKeys.Details) as UntypedFormGroup;
  }

  public get outcomesFormArray(): UntypedFormArray {
    return this.formGroup.get(BudgetControlKeys.Outcomes) as UntypedFormArray;
  }

  public get contributorsFormArray(): UntypedFormArray {
    return this.formGroup.get(BudgetControlKeys.Contributors) as UntypedFormArray;
  }

  public onSave(): void {
    this.formService.submitFormGroup$(this.formGroup, this.destroy$).subscribe();
  }
}
