import { SimpleTableRowControl } from '../../../../common/components/simple-table/common/simple-table-row-control';
import { BudgetContributorControlKeys } from './budget-contributor-control-keys';

export interface BudgetContributorControl {
  [BudgetContributorControlKeys.ID]: string;
  [BudgetContributorControlKeys.Name]: string;
  [BudgetContributorControlKeys.Incomes]: SimpleTableRowControl[];
  [BudgetContributorControlKeys.Allowances]: SimpleTableRowControl[];
  [BudgetContributorControlKeys.Deductions]: SimpleTableRowControl[];
}
