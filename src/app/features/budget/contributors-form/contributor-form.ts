import {IIncomeFormValue} from "../incomes-form/incomes-form";
import {IAllowanceFormValue} from "../allowances-form/allowances-form";
import {IDeductionFormValue} from "../deductions-form/deductions-form";

export enum ContributorFormKeys {
  ID = 'id',
  Name = 'name',
  Incomes = 'incomes',
  Allowances = 'allowances',
  Deductions = 'deductions'
}

export interface IContributorFormValue {
  [ContributorFormKeys.ID]: string;
  [ContributorFormKeys.Name]: string;
  [ContributorFormKeys.Incomes]: IIncomeFormValue[];
  [ContributorFormKeys.Allowances]: IAllowanceFormValue[];
  [ContributorFormKeys.Deductions]: IDeductionFormValue[];
}
