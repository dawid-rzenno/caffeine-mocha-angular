import {
    SimpleTableRowInterface
} from "../../../../common/components/simple-table/common/simple-table-row.interface";

export enum BudgetTableRowKey {
  ID = 'id',
  Name = 'name',
  TotalOutcomeValue = 'totalOutcomeValue',
  TotalIncomeValue = 'totalIncomeValue',
  ContributorsCount = 'contributorsCount',
  Actions = 'actions'
}

export interface IBudgetTableRowInterface extends SimpleTableRowInterface {
  [BudgetTableRowKey.TotalOutcomeValue]: number;
  [BudgetTableRowKey.TotalIncomeValue]: number;
  [BudgetTableRowKey.ContributorsCount]: number;
}
