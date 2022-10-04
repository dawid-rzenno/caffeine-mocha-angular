import {
    SimpleTableRowControlInterface
} from "../../../../common/components/simple-table/common/simple-table-row-control.interface";

export enum BudgetContributorControlKey {
  ID = 'id',
  Name = 'name',
  Incomes = 'incomes',
  Allowances = 'allowances',
  Deductions = 'deductions'
}

export interface BudgetContributorControlInterface {
  [BudgetContributorControlKey.ID]: string;
  [BudgetContributorControlKey.Name]: string;
  [BudgetContributorControlKey.Incomes]: SimpleTableRowControlInterface[];
  [BudgetContributorControlKey.Allowances]: SimpleTableRowControlInterface[];
  [BudgetContributorControlKey.Deductions]: SimpleTableRowControlInterface[];
}
