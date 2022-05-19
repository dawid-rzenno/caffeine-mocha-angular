import {IContributorFormArrayElement} from "../contributors-form-array/contributors-form-array";
import {IOutcomesFormArrayElement} from "../outcomes-form-array/outcomes-form-array";
import {IBudgetDetailsFormGroup} from "../budget-details-form-group/budget-details-form-group";

export enum BudgetFormGroupKeys {
  Details = 'details',
  Outcomes = 'outcomes',
  Contributors = 'contributors'
}

export interface IBudgetFormGroupRawValue {
  [BudgetFormGroupKeys.Details]: IBudgetDetailsFormGroup,
  [BudgetFormGroupKeys.Outcomes]: IOutcomesFormArrayElement[],
  [BudgetFormGroupKeys.Contributors]: IContributorFormArrayElement[]
}
