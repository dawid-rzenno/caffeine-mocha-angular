import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BudgetDetailsControlKey} from "./common/budget-details-control.interface";
import {BudgetDetailsInterface} from "./common/budget-details.interface";

@Injectable()
export class BudgetDetailsControlService {
  public static attachControlsToFormGroup(
    formGroup: FormGroup,
    budgetDetails?: BudgetDetailsInterface,
    reattach: boolean = false
  ): FormGroup {

    if (reattach) {
      formGroup.removeControl(BudgetDetailsControlKey.Name);
      formGroup.removeControl(BudgetDetailsControlKey.Owner);
    }

    formGroup.addControl(
      BudgetDetailsControlKey.Name,
      new FormControl(budgetDetails?.name ?? '', {validators: [Validators.required]})
    );

    formGroup.addControl(
      BudgetDetailsControlKey.Owner,
      new FormControl(budgetDetails?.owner ?? '', {validators: [Validators.required]})
    );

    return formGroup;
  }
}
