import {Injectable} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {BudgetGeneralControlKey} from "./common/budget-general-control.interface";
import {BudgetGeneralInterface} from "./common/budget-general.interface";

@Injectable()
export class BudgetGeneralControlService {
  public static attachControlsToFormGroup(
    formGroup: UntypedFormGroup,
    budgetDetails?: BudgetGeneralInterface,
    reattach: boolean = false
  ): UntypedFormGroup {

    if (reattach) {
      formGroup.removeControl(BudgetGeneralControlKey.Name);
      formGroup.removeControl(BudgetGeneralControlKey.Owner);
    }

    formGroup.addControl(
      BudgetGeneralControlKey.Name,
      new UntypedFormControl(budgetDetails?.name ?? '', {validators: [Validators.required]})
    );

    formGroup.addControl(
      BudgetGeneralControlKey.Owner,
      new UntypedFormControl(budgetDetails?.owner ?? '', {validators: [Validators.required]})
    );

    return formGroup;
  }
}
