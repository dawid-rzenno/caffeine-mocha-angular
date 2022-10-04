import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BudgetGeneralControlKey} from "./common/budget-general-control.interface";
import {BudgetGeneralInterface} from "./common/budget-general.interface";

@Injectable()
export class BudgetGeneralControlService {
  public static attachControlsToFormGroup(
    formGroup: FormGroup,
    budgetDetails?: BudgetGeneralInterface,
    reattach: boolean = false
  ): FormGroup {

    if (reattach) {
      formGroup.removeControl(BudgetGeneralControlKey.Name);
      formGroup.removeControl(BudgetGeneralControlKey.Owner);
    }

    formGroup.addControl(
      BudgetGeneralControlKey.Name,
      new FormControl(budgetDetails?.name ?? '', {validators: [Validators.required]})
    );

    formGroup.addControl(
      BudgetGeneralControlKey.Owner,
      new FormControl(budgetDetails?.owner ?? '', {validators: [Validators.required]})
    );

    return formGroup;
  }
}
