import {IContributor, IContributorFormArrayElement} from "../contributors-form-array/contributors-form-array";
import {IOutcome, IOutcomeFormArrayElement} from "../outcomes-form-array/outcomes-form-array";
import {IBudgetDetails, IBudgetDetailsFormGroup} from "../budget-details-form-group/budget-details-form-group";

export enum BudgetFormGroupKeys {
  Details = 'details',
  Outcomes = 'outcomes',
  Contributors = 'contributors'
}

export interface IBudgetFormGroupRawValue {
  [BudgetFormGroupKeys.Details]: IBudgetDetailsFormGroup,
  [BudgetFormGroupKeys.Outcomes]: IOutcomeFormArrayElement[],
  [BudgetFormGroupKeys.Contributors]: IContributorFormArrayElement[]
}

export interface IBudget {
  id: string;
  details: IBudgetDetails;
  outcomes: IOutcome[];
  contributors: IContributor[];
}
