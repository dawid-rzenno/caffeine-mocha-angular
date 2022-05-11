import {IContributorFormValue} from "../contributors-form/contributor-form";
import {IOutcomesFormValue} from "../outcomes-form/outcomes-form";

export enum BudgetFormKeys {
  Name = 'Name',
  Outcomes = 'Outcomes',
  Contributors = 'Contributors'
}

export interface IBudgetFormValue {
  [BudgetFormKeys.Name]: string,
  [BudgetFormKeys.Outcomes]: IOutcomesFormValue,
  [BudgetFormKeys.Contributors]: IContributorFormValue
}
