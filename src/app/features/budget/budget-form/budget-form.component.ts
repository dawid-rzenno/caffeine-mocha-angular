import {Component} from '@angular/core';
import {FormArray, FormGroup} from "@angular/forms";
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

  public get detailsFormGroup(): FormGroup {
    return this.formGroup.get(BudgetControlKey.Details) as FormGroup;
  }

  public get outcomesFormArray(): FormArray {
    return this.formGroup.get(BudgetControlKey.Outcomes) as FormArray;
  }

  public get contributorsFormArray(): FormArray {
    return this.formGroup.get(BudgetControlKey.Contributors) as FormArray;
  }

  public onSave(): void {
    this.formService.submitFormGroup$(this.formGroup, this.destroy$).subscribe();
  }
}
