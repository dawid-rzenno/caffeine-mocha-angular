import { SimpleTableRow } from '../../../../common/components/simple-table/common/simple-table-row';
import { BudgetTableRowKeys } from './budget-table-row-keys';

export interface BudgetTableRow extends SimpleTableRow {
  [BudgetTableRowKeys.TotalOutcomeValue]: number;
  [BudgetTableRowKeys.TotalIncomeValue]: number;
  [BudgetTableRowKeys.ContributorsCount]: number;
}
