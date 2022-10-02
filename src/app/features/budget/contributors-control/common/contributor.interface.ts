import {
    SimpleTableRowInterface
} from "../../../../shared/components/simple-table/common/simple-table-row.interface";

export interface ContributorInterface {
  id: string;
  name: string;
  incomes: SimpleTableRowInterface[];
  allowances: SimpleTableRowInterface[];
  deductions: SimpleTableRowInterface[];
}
