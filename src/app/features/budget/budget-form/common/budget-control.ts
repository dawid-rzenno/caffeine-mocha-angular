import { BudgetContributorControl } from '../../budget-contributors-control/common/budget-contributor-control';
import { BudgetGeneralControl } from '../../budget-general-control/common/budget-general-control';
import { SimpleTableRowControl as FormArrayElement } from '../../../../common/components/simple-table/common/simple-table-row-control';
import { BudgetControlKeys } from './budget-control-keys';

export interface BudgetControl {
  [BudgetControlKeys.ID]: string,
  [BudgetControlKeys.Details]: BudgetGeneralControl,
  [BudgetControlKeys.Outcomes]: FormArrayElement[],
  [BudgetControlKeys.Contributors]: BudgetContributorControl[]
}

