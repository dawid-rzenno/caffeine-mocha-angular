import {IContributorFormValue} from "../contributors-form/contributor-form";
import {IOutcomesInputGroup} from "../outcomes-form/outcomes-input.model";

export enum BudgetFormSteps {
  Details = 'Details',
  Outcomes = 'Outcomes',
  Contributors = 'Contributors',
  Contributions = 'Contributions'
}

export enum BudgetFormKeys {
  Details = 'details',
  Outcomes = 'outcomes',
  Contributors = 'contributors'
}

export interface IBudgetFormValue {
  [BudgetFormKeys.Details]: IBudgetDetailsFormValue,
  [BudgetFormKeys.Outcomes]: IOutcomesInputGroup,
  [BudgetFormKeys.Contributors]: IContributorFormValue
}

export enum BudgetDetailsFormKeys {
  Name = 'name',
  Owner = 'owner',
}

export interface IBudgetDetailsFormValue {
  [BudgetDetailsFormKeys.Name]: string,
  [BudgetDetailsFormKeys.Owner]: string,
}


