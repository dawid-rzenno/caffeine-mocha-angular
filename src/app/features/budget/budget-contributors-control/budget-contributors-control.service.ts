import {Injectable} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
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
  public static attachControlsToFormArrays(
    formArray: FormArray,
    contributors: BudgetContributorInterface[],
  ): FormArray {
    contributors.forEach((contributor: BudgetContributorInterface) => {
      const incomesFormArray: FormArray = SimpleInputTableService.attachControlsToFormArrays(
        new FormArray([]),
        contributor.incomes
      );

      const allowancesFormArray: FormArray = SimpleInputTableService.attachControlsToFormArrays(
        new FormArray([]),
        contributor.allowances
      );

      const deductionsFormArray: FormArray = SimpleInputTableService.attachControlsToFormArrays(
        new FormArray([]),
        contributor.deductions
      );

      formArray.push(
        new FormGroup({
          [SimpleTableRowControlKey.ID]: new FormControl(contributor.id ?? null),
          [SimpleTableRowControlKey.Name]: new FormControl(
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
