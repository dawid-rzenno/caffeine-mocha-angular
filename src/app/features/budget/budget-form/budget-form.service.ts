import {EventEmitter, Injectable} from '@angular/core';
import {map, Observable, takeUntil} from "rxjs";
import {Budget} from "./common/budget";
import {UntypedFormArray, UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {BudgetControl} from "./common/budget-control";
import {BudgetService} from "../budget.service";
import {BudgetGeneralControlService} from "../budget-general-control/budget-general-control.service";
import {SimpleInputTableService} from "../../../common/components/simple-input-table/simple-input-table.service";
import {BudgetContributorsControlService} from "../budget-contributors-control/budget-contributors-control.service";
import { BudgetControlKeys } from "./common/budget-control-keys";

@Injectable()
export class BudgetFormService {
  constructor(private service: BudgetService) {
  }

  getFormGroup$(budgetId: string): Observable<UntypedFormGroup> {
    return this.service.get(budgetId).pipe(
      map((budget: Budget) => this.getFormGroup(budget))
    )
  }

  getFormGroup(budget?: Budget): UntypedFormGroup {
    const budgetDetailsFormGroup: UntypedFormGroup = BudgetGeneralControlService.attachControlsToFormGroup(
      new UntypedFormGroup({}),
      budget?.details
    );

    const outcomesFormArray: UntypedFormArray = SimpleInputTableService.attachControlsToFormArray(
      new UntypedFormArray([]),
      budget?.outcomes ?? []
    );

    const contributorsFormArray: UntypedFormArray = BudgetContributorsControlService.attachControlsToFormArray(
      new UntypedFormArray([]),
      budget?.contributors ?? []
    );

    return new UntypedFormGroup({
      [BudgetControlKeys.ID]: new UntypedFormControl(budget?.id),
      [BudgetControlKeys.Details]: budgetDetailsFormGroup,
      [BudgetControlKeys.Outcomes]: outcomesFormArray,
      [BudgetControlKeys.Contributors]: contributorsFormArray
    });

  }

  submitFormGroup$(formGroup: UntypedFormGroup, takeUntil$: EventEmitter<void>): Observable<BudgetControl> {
    return this.service.create(formGroup.getRawValue() as BudgetControl).pipe(
      takeUntil(takeUntil$),
    );
  }
}
