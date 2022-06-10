import {ISimpleListCompatibleObjectArrayElement} from "../../../shared/components/simple-list/simple-list";

export enum BudgetListColumnKeys {
  ID = 'id',
  Name = 'name',
  TotalOutcomeValue = 'totalOutcomeValue',
  TotalIncomeValue = 'totalIncomeValue',
  ContributorsCount = 'contributorsCount',
  Actions = 'actions'
}

export interface IBudgetListElement extends ISimpleListCompatibleObjectArrayElement {
  [BudgetListColumnKeys.TotalOutcomeValue]: number;
  [BudgetListColumnKeys.TotalIncomeValue]: number;
  [BudgetListColumnKeys.ContributorsCount]: number;
}
