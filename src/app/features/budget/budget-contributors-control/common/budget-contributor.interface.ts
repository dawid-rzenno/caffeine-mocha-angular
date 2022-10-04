import {
    SimpleTableRowInterface
} from "../../../../common/components/simple-table/common/simple-table-row.interface";

export interface BudgetContributorInterface {
  id: string;
  name: string;
  incomes: SimpleTableRowInterface[];
  allowances: SimpleTableRowInterface[];
  deductions: SimpleTableRowInterface[];
}
