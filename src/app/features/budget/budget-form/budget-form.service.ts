import {EventEmitter, Injectable} from '@angular/core';
import {finalize, map, Observable, takeUntil} from "rxjs";
import {BudgetInterface} from "./common/budget.interface";
import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {BudgetControlKey, BudgetControlInterface} from "./common/budget-control.interface";
import {BudgetService} from "../budget.service";
import {StatusService} from "../../../core/status/status.service";
import {StatusMapKey} from "../../../core/status/common/status-map-key.enum";
import {BudgetGeneralControlService} from "../budget-general-control/budget-general-control.service";
import {SimpleInputTableService} from "../../../common/components/simple-input-table/simple-input-table.service";
import {BudgetContributorsControlService} from "../budget-contributors-control/budget-contributors-control.service";

@Injectable()
export class BudgetFormService {
  constructor(private service: BudgetService, private loadingService: StatusService) {}

  getFormGroup$(budgetId: string, takeUntil$: EventEmitter<void>): Observable<FormGroup> {
    this.loadingService.toggleStatus(StatusMapKey.BudgetForm, true);
    return this.service.get(budgetId).pipe(
      takeUntil(takeUntil$),
      map((budget: BudgetInterface) => this.getFormGroup(budget)),
      finalize(() => this.loadingService.toggleStatus(StatusMapKey.BudgetForm, false))
    )
  }

  getFormGroup(budget?: BudgetInterface): FormGroup {
    const budgetDetailsFormGroup: FormGroup = BudgetGeneralControlService.attachControlsToFormGroup(
      new FormGroup({}),
      budget?.details
    );

    const outcomesFormArray: FormArray = SimpleInputTableService.attachControlsToFormArrays(
      new FormArray([]),
      budget?.outcomes ?? []
    );

    const contributorsFormArray: FormArray = BudgetContributorsControlService.attachControlsToFormArrays(
      new FormArray([]),
      budget?.contributors ?? []
    );

    return new FormGroup({
      [BudgetControlKey.ID]: new FormControl(budget?.id),
      [BudgetControlKey.Details]: budgetDetailsFormGroup,
      [BudgetControlKey.Outcomes]: outcomesFormArray,
      [BudgetControlKey.Contributors]: contributorsFormArray
    });

  }

  submitFormGroup$(formGroup: FormGroup, takeUntil$: EventEmitter<void>): Observable<BudgetControlInterface> {
    this.loadingService.toggleStatus(StatusMapKey.BudgetForm, true);
    return this.service.create(formGroup.getRawValue() as BudgetControlInterface).pipe(
      takeUntil(takeUntil$),
      finalize(() => this.loadingService.toggleStatus(StatusMapKey.BudgetForm, false))
    );
  }
}
