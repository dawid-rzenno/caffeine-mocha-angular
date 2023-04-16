import {Injectable} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {
  BudgetDetails,
  BudgetDetailsFormGroup,
  BudgetDetailsFormGroupKey
} from "./common/budget-details-form-group.model";
import {FormControlValue, ID} from "../../../common/types/id.type";

@Injectable()
export class BudgetDetailsFormService {
  public static createFormGroup(budgetDetails: FormControlValue<BudgetDetails>): BudgetDetailsFormGroup {
    let id: FormControlValue<ID> = null;
    let name: FormControlValue<string> = null;
    let owner: FormControlValue<string> = null;

    if (budgetDetails) {
      id = budgetDetails.id;
      name = budgetDetails.name;
      owner = budgetDetails.owner;
    }

    return new BudgetDetailsFormGroup({
      [BudgetDetailsFormGroupKey.ID]: new FormControl(id, Validators.required),
      [BudgetDetailsFormGroupKey.Name]: new FormControl(name, Validators.required),
      [BudgetDetailsFormGroupKey.Owner]: new FormControl(owner, Validators.required)
    });
  }
}
