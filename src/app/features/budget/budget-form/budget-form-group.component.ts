import {Component} from '@angular/core';
import {BudgetFormService} from "./budget-form.service";
import {RoutedFormGroupComponentAbstract} from "../common/routed-form-group-component.abstract";
import {StatusService} from "../../../core/status/status.service";
import {ActivatedRoute} from "@angular/router";
import {BudgetFormGroup, BudgetFormGroupKey} from "./common/budget-form-group.model";
import {BudgetDetailsFormGroup} from "../budget-details-form-group/common/budget-details-form-group.model";
import {
  SimpleTableRowFormArray
} from "../../../common/components/simple-table/common/simple-table-row-form-array.model";
import {BudgetContributorFormArray} from "../budget-contributors-form-array/common/budget-contributor-form-array.model";

@Component({
  selector: 'mocha-budget-form',
  templateUrl: './budget-form-group.component.html',
  styleUrls: ['./budget-form-group.component.scss'],
  providers: [BudgetFormService]
})
export class BudgetFormGroupComponent extends RoutedFormGroupComponentAbstract<BudgetFormGroup> {
  public readonly detailsFormGroup: BudgetDetailsFormGroup;
  public readonly outcomesFormArray: SimpleTableRowFormArray;
  public readonly contributorsFormArray: BudgetContributorFormArray;

  constructor(
    private formService: BudgetFormService,
    protected override activatedRoute: ActivatedRoute,
    public override statusService: StatusService
  ) {
    super(activatedRoute, statusService);

    this.detailsFormGroup = this.formGroup.get(BudgetFormGroupKey.Details) as BudgetDetailsFormGroup;
    this.outcomesFormArray = this.formGroup.get(BudgetFormGroupKey.Outcomes) as SimpleTableRowFormArray;
    this.contributorsFormArray = this.formGroup.get(BudgetFormGroupKey.Contributors) as BudgetContributorFormArray;
  }

  public onSave(): void {
    this.formService.submitFormGroup$(this.formGroup, this.destroy$).subscribe();
  }
}
