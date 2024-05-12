import {Injectable} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {BudgetGeneral} from "./common/budget-general";
import { BudgetGeneralControlKeys } from "./common/budget-general-control-keys";

@Injectable()
export class BudgetGeneralControlService {
  public static attachControlsToFormGroup(
    formGroup: UntypedFormGroup,
    budgetDetails?: BudgetGeneral,
    reattach: boolean = false
  ): UntypedFormGroup {

    if (reattach) {
      formGroup.removeControl(BudgetGeneralControlKeys.Name);
      formGroup.removeControl(BudgetGeneralControlKeys.Owner);
    }

    formGroup.addControl(
      BudgetGeneralControlKeys.Name,
      new UntypedFormControl(budgetDetails?.name ?? '', {validators: [Validators.required]})
    );

    formGroup.addControl(
      BudgetGeneralControlKeys.Owner,
      new UntypedFormControl(budgetDetails?.owner ?? '', {validators: [Validators.required]})
    );

    return formGroup;
  }
}
