import {FormArray} from "@angular/forms";
import {BudgetContributorFormGroup, BudgetContributorFormGroupValue} from "./budget-contributor-form-group-value.model";

export class BudgetContributorFormArray extends FormArray<BudgetContributorFormGroup> {
}

export type BudgetContributorFormArrayValues = BudgetContributorFormGroupValue[];
