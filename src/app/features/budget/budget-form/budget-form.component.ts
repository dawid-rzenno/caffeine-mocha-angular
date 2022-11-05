import {Component} from '@angular/core';
import {UntypedFormArray, UntypedFormGroup} from "@angular/forms";
import {BudgetControlKey} from "./common/budget-control.interface";
import {BudgetFormService} from "./budget-form.service";
import {RoutedFormComponentAbstract} from "../common/routed-form-component.abstract";
import {StatusService} from "../../../core/status/status.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'mocha-budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.scss'],
  providers: [BudgetFormService]
})
export class BudgetFormComponent extends RoutedFormComponentAbstract {
  public readonly FormKey = BudgetControlKey;

  constructor(
    private formService: BudgetFormService,
    protected override activatedRoute: ActivatedRoute,
    public override statusService: StatusService
  ) {
    super(activatedRoute, statusService);
  }

  public get detailsFormGroup(): UntypedFormGroup {
    return this.formGroup.get(BudgetControlKey.Details) as UntypedFormGroup;
  }

  public get outcomesFormArray(): UntypedFormArray {
    return this.formGroup.get(BudgetControlKey.Outcomes) as UntypedFormArray;
  }

  public get contributorsFormArray(): UntypedFormArray {
    return this.formGroup.get(BudgetControlKey.Contributors) as UntypedFormArray;
  }

  public onSave(): void {
    this.formService.submitFormGroup$(this.formGroup, this.destroy$).subscribe();
  }
}
