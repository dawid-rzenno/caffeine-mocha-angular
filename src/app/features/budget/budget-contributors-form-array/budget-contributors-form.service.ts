import {Injectable} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {
  BudgetContributor,
  BudgetContributorControlKey,
  BudgetContributorFormGroup
} from "./common/budget-contributor-form-group-value.model";
import {
  SimpleInputTableFormService
} from "../../../common/components/simple-input-table/simple-input-table-form.service";
import {
  SimpleTableRow,
  SimpleTableRowFormGroupKey
} from "../../../common/components/simple-table/common/simple-table-row-form-group.model";
import {FormControlValue, ID} from "../../../common/types/id.type";
import {BudgetContributorFormArray} from "./common/budget-contributor-form-array.model";

@Injectable({
  providedIn: 'root'
})
export class BudgetContributorsFormService {
  public static createFormArray(contributors: FormControlValue<BudgetContributor[]>): BudgetContributorFormArray {

    return new BudgetContributorFormArray(
      !contributors ? [] : contributors.map(
        (contributor: BudgetContributor) => BudgetContributorsFormService.createFormGroup(contributor)
      )
    )
  }

  static pushEmptyFormGroupToFormArray(formArray: BudgetContributorFormArray): void {
    formArray.push(BudgetContributorsFormService.createFormGroup(null));
  }

  private static createFormGroup(contributor: FormControlValue<BudgetContributor>): BudgetContributorFormGroup {
    let id: FormControlValue<ID> = null;
    let name: FormControlValue<string> = null;
    let incomes: FormControlValue<SimpleTableRow[]> = null;
    let allowances: FormControlValue<SimpleTableRow[]> = null;
    let deductions: FormControlValue<SimpleTableRow[]> = null;

    if (contributor) {
      id = contributor.id;
      name = contributor.name;
      incomes = contributor.incomes;
      allowances = contributor.allowances;
      deductions = contributor.deductions;
    }

    return new BudgetContributorFormGroup({
      [SimpleTableRowFormGroupKey.ID]: new FormControl(id),
      [SimpleTableRowFormGroupKey.Name]: new FormControl(name, Validators.required),
      [BudgetContributorControlKey.Incomes]: SimpleInputTableFormService.createFormArray(incomes),
      [BudgetContributorControlKey.Allowances]: SimpleInputTableFormService.createFormArray(allowances),
      [BudgetContributorControlKey.Deductions]: SimpleInputTableFormService.createFormArray(deductions)
    })
  }
}
