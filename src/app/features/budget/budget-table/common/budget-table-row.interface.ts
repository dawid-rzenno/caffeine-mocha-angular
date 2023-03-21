import {SimpleTableRow} from "../../../../common/components/simple-table/common/simple-table-row-form-group.model";

export enum BudgetTableRowKey {
  ID = 'id',
  Name = 'name',
  TotalOutcomeValue = 'totalOutcomeValue',
  TotalIncomeValue = 'totalIncomeValue',
  ContributorsCount = 'contributorsCount',
  Actions = 'actions'
}

export interface IBudgetTableRowInterface extends SimpleTableRow {
  [BudgetTableRowKey.TotalOutcomeValue]: number;
  [BudgetTableRowKey.TotalIncomeValue]: number;
  [BudgetTableRowKey.ContributorsCount]: number;
}
