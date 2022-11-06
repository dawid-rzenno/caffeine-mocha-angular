import {Injectable} from '@angular/core';
import {UntypedFormArray, UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {BudgetContributorControlKey} from "./common/budget-contributor-control.interface";
import {BudgetContributorInterface} from "./common/budget-contributor.interface";
import {SimpleInputTableService} from "../../../common/components/simple-input-table/simple-input-table.service";
import {
  SimpleTableRowControlKey
} from "../../../common/components/simple-table/common/simple-table-row-control.interface";

@Injectable({
  providedIn: 'root'
})
export class BudgetContributorsControlService {
  public static attachControlsToFormArray(
    formArray: UntypedFormArray,
    contributors: BudgetContributorInterface[],
  ): UntypedFormArray {
    contributors.forEach((contributor: BudgetContributorInterface) => {
      const incomesFormArray: UntypedFormArray = SimpleInputTableService.attachControlsToFormArray(
        new UntypedFormArray([]),
        contributor.incomes
      );

      const allowancesFormArray: UntypedFormArray = SimpleInputTableService.attachControlsToFormArray(
        new UntypedFormArray([]),
        contributor.allowances
      );

      const deductionsFormArray: UntypedFormArray = SimpleInputTableService.attachControlsToFormArray(
        new UntypedFormArray([]),
        contributor.deductions
      );

      formArray.push(
        new UntypedFormGroup({
          [SimpleTableRowControlKey.ID]: new UntypedFormControl(contributor.id ?? null),
          [SimpleTableRowControlKey.Name]: new UntypedFormControl(
            contributor.name ?? '',
            {validators: [Validators.required]}
          ),
          [BudgetContributorControlKey.Incomes]: incomesFormArray,
          [BudgetContributorControlKey.Allowances]: allowancesFormArray,
          [BudgetContributorControlKey.Deductions]: deductionsFormArray
        })
      );
    })

    return formArray;
  }
}
