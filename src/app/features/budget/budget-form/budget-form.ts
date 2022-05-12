import {IContributorFormValue} from "../contributors-form/contributor-form";
import {IOutcomesFormValue} from "../outcomes-form/outcomes-form";

export enum BudgetFormKeys {
  Name = 'name',
  Outcomes = 'outcomes',
  Contributors = 'contributors'
}

export interface IBudgetFormValue {
  [BudgetFormKeys.Name]: string,
  [BudgetFormKeys.Outcomes]: IOutcomesFormValue,
  [BudgetFormKeys.Contributors]: IContributorFormValue
}
