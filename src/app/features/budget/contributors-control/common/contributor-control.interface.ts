import {
    SimpleTableRowControlInterface
} from "../../../../shared/components/simple-table/common/simple-table-row-control.interface";

export enum ContributorControlKey {
  ID = 'id',
  Name = 'name',
  Incomes = 'incomes',
  Allowances = 'allowances',
  Deductions = 'deductions'
}

export interface ContributorControlInterface {
  [ContributorControlKey.ID]: string;
  [ContributorControlKey.Name]: string;
  [ContributorControlKey.Incomes]: SimpleTableRowControlInterface[];
  [ContributorControlKey.Allowances]: SimpleTableRowControlInterface[];
  [ContributorControlKey.Deductions]: SimpleTableRowControlInterface[];
}
