import {Injectable} from '@angular/core';
import {UntypedFormArray, UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {BudgetContributor} from "./common/budget-contributor";
import {SimpleInputTableService} from "../../../common/components/simple-input-table/simple-input-table.service";
import { BudgetContributorControlKeys } from "./common/budget-contributor-control-keys";
import {
  SimpleTableRowControlKeys
} from "../../../common/components/simple-table/common/simple-table-row-control-keys";

@Injectable({
  providedIn: 'root'
})
export class BudgetContributorsControlService {
  public static attachControlsToFormArray(
    formArray: UntypedFormArray,
    contributors: BudgetContributor[],
  ): UntypedFormArray {
    contributors.forEach((contributor: BudgetContributor) => {
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
          [SimpleTableRowControlKeys.ID]: new UntypedFormControl(contributor.id ?? null),
          [SimpleTableRowControlKeys.Name]: new UntypedFormControl(
            contributor.name ?? '',
            {validators: [Validators.required]}
          ),
          [BudgetContributorControlKeys.Incomes]: incomesFormArray,
          [BudgetContributorControlKeys.Allowances]: allowancesFormArray,
          [BudgetContributorControlKeys.Deductions]: deductionsFormArray
        })
      );
    })

    return formArray;
  }
}
