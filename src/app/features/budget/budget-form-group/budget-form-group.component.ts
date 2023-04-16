import {Component} from '@angular/core';
import {RoutedFormGroupComponentAbstract} from "../common/routed-form-group-component.abstract";
import {ActivatedRouteSnapshot} from "@angular/router";
import {Budget, BudgetFormGroup, BudgetFormGroupKey} from "./common/budget-form-group.model";
import {
  BudgetDetails,
  BudgetDetailsFormGroup
} from "../budget-details-form-group/common/budget-details-form-group.model";
import {
  SimpleTableRowFormArray
} from "../../../common/components/simple-table/common/simple-table-row-form-array.model";
import {BudgetContributorFormArray} from "../budget-contributors-form-array/common/budget-contributor-form-array.model";
import {FormControl} from "@angular/forms";
import {FormControlValue, ID} from "../../../common/types/id.type";
import {SimpleTableRow} from "../../../common/components/simple-table/common/simple-table-row-form-group.model";
import {BudgetContributor} from "../budget-contributors-form-array/common/budget-contributor-form-group-value.model";
import {BudgetDetailsFormService} from "../budget-details-form-group/budget-details-form.service";
import {
  SimpleInputTableFormService
} from "../../../common/components/simple-input-table/simple-input-table-form.service";
import {BudgetContributorsFormService} from "../budget-contributors-form-array/budget-contributors-form.service";
import {Observable, Subject, takeUntil} from "rxjs";
import {BudgetService} from "../budget.service";
import {BudgetRouteDataKey} from "../routing/budget-routing.module";

@Component({
  selector: 'mocha-budget-form-group-group',
  templateUrl: './budget-form-group.component.html',
  styleUrls: ['./budget-form-group.component.scss']
})
export class BudgetFormGroupComponent extends RoutedFormGroupComponentAbstract<BudgetFormGroup, Budget> {
  readonly formGroup: BudgetFormGroup = this.createFormGroup(this.getFormGroupRouteData());
  readonly detailsFormGroup: BudgetDetailsFormGroup = this.formGroup.controls[BudgetFormGroupKey.Details];
  readonly outcomesFormArray: SimpleTableRowFormArray = this.formGroup.controls[BudgetFormGroupKey.Outcomes];
  readonly contributorsFormArray: BudgetContributorFormArray = this.formGroup.controls[BudgetFormGroupKey.Contributors];

  constructor(protected override activatedRouteSnapshot: ActivatedRouteSnapshot, private service: BudgetService) {
    super(activatedRouteSnapshot, BudgetRouteDataKey.Budget);
  }

  onSave(): void {
    this.submitFormGroup$(this.formGroup, this.destroy$).subscribe();
  }

  protected submitFormGroup$(formGroup: BudgetFormGroup, takeUntil$: Subject<void>): Observable<Budget> {
    return this.service.create(formGroup.getRawValue() as Budget).pipe(
      takeUntil(takeUntil$),
    );
  }

  protected createFormGroup(budget?: Budget): BudgetFormGroup {
    let id: FormControlValue<ID> = null;
    let details: FormControlValue<BudgetDetails> = null;
    let outcomes: FormControlValue<SimpleTableRow[]> = null;
    let contributors: FormControlValue<BudgetContributor[]> = null;

    if (budget) {
      id = budget.id;
      details = budget.details;
      outcomes = budget.outcomes;
      contributors = budget.contributors;
    }

    return new BudgetFormGroup({
      [BudgetFormGroupKey.ID]: new FormControl(id),
      [BudgetFormGroupKey.Details]: BudgetDetailsFormService.createFormGroup(details),
      [BudgetFormGroupKey.Outcomes]: SimpleInputTableFormService.createFormArray(outcomes),
      [BudgetFormGroupKey.Contributors]: BudgetContributorsFormService.createFormArray(contributors)
    });
  }
}
