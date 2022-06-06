import {IListComponentAbstractDataSourceElement} from "../../../abstracts/list-component.abstract";

export enum BudgetListKeys {
  Name = 'name',
  TotalOutcomeValue = 'totalOutcomeValue',
  TotalIncomeValue = 'totalIncomeValue',
  ContributorsCount = 'contributorsCount',
}

export interface IBudgetListElement extends IListComponentAbstractDataSourceElement {
  [BudgetListKeys.TotalOutcomeValue]: number;
  [BudgetListKeys.TotalIncomeValue]: number;
  [BudgetListKeys.ContributorsCount]: number;
}
