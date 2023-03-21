import {EventEmitter, Injectable} from '@angular/core';
import {map, Observable, takeUntil} from "rxjs";
import {FormControl, UntypedFormGroup} from "@angular/forms";
import {Budget, BudgetFormGroup, BudgetFormGroupKey, BudgetFormGroupValue} from "./common/budget-form-group.model";
import {BudgetService} from "../budget.service";
import {BudgetDetailsFormService} from "../budget-details-form-group/budget-details-form.service";
import {
  SimpleInputTableFormService
} from "../../../common/components/simple-input-table/simple-input-table-form.service";
import {BudgetContributorsFormService} from "../budget-contributors-form-array/budget-contributors-form.service";
import {BudgetDetails} from "../budget-details-form-group/common/budget-details-form-group.model";
import {SimpleTableRow} from "../../../common/components/simple-table/common/simple-table-row-form-group.model";
import {BudgetContributor} from "../budget-contributors-form-array/common/budget-contributor-form-group-value.model";
import {FormControlValue, ID} from "../../../common/types/id.type";

@Injectable()
export class BudgetFormService {
  constructor(private service: BudgetService) {
  }

  static createFormGroup(budget?: Budget): BudgetFormGroup {
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

  getFormGroup$(budgetId: string): Observable<BudgetFormGroup> {
    return this.service.get(budgetId).pipe(
      map((budget: Budget) => BudgetFormService.createFormGroup(budget))
    )
  }

  submitFormGroup$(formGroup: UntypedFormGroup, takeUntil$: EventEmitter<void>): Observable<Budget> {
    return this.service.create(formGroup.getRawValue() as BudgetFormGroupValue).pipe(
      takeUntil(takeUntil$),
    );
  }
}
