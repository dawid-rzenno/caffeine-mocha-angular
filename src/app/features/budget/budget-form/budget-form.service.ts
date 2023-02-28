import {EventEmitter, Injectable} from '@angular/core';
import {map, Observable, takeUntil} from "rxjs";
import {BudgetInterface} from "./common/budget.interface";
import {UntypedFormArray, UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {BudgetControlInterface, BudgetControlKey} from "./common/budget-control.interface";
import {BudgetService} from "../budget.service";
import {BudgetGeneralControlService} from "../budget-general-control/budget-general-control.service";
import {SimpleInputTableService} from "../../../common/components/simple-input-table/simple-input-table.service";
import {BudgetContributorsControlService} from "../budget-contributors-control/budget-contributors-control.service";

@Injectable()
export class BudgetFormService {
  constructor(private service: BudgetService) {
  }

  getFormGroup$(budgetId: string): Observable<UntypedFormGroup> {
    return this.service.get(budgetId).pipe(
      map((budget: BudgetInterface) => this.getFormGroup(budget))
    )
  }

  getFormGroup(budget?: BudgetInterface): UntypedFormGroup {
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
      [BudgetControlKey.ID]: new UntypedFormControl(budget?.id),
      [BudgetControlKey.Details]: budgetDetailsFormGroup,
      [BudgetControlKey.Outcomes]: outcomesFormArray,
      [BudgetControlKey.Contributors]: contributorsFormArray
    });

  }

  submitFormGroup$(formGroup: UntypedFormGroup, takeUntil$: EventEmitter<void>): Observable<BudgetControlInterface> {
    return this.service.create(formGroup.getRawValue() as BudgetControlInterface).pipe(
      takeUntil(takeUntil$),
    );
  }
}
