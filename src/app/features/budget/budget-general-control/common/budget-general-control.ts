import { BudgetGeneralControlKeys } from './budget-general-control-keys';

export interface BudgetGeneralControl {
  [BudgetGeneralControlKeys.Name]: string;
  [BudgetGeneralControlKeys.Owner]: string;
}
