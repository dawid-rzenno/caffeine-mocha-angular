import {
    SimpleTableRow
} from "../../../../common/components/simple-table/common/simple-table-row";

export interface BudgetContributor {
  id: string;
  name: string;
  incomes: SimpleTableRow[];
  allowances: SimpleTableRow[];
  deductions: SimpleTableRow[];
}
