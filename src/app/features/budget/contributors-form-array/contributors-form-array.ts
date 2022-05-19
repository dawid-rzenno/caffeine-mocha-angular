import {IIncomeFormArrayElement} from "../incomes-form-array/incomes-form-array";
import {IAllowanceFormArrayElement} from "../allowances-form-array/allowances-form-array";
import {IDeductionFormArrayElement} from "../deductions-form-array/deductions-form-array";

export enum ContributorFormArrayElementKeys {
  Name = 'name',
  Incomes = 'incomes',
  Allowances = 'allowances',
  Deductions = 'deductions'
}

export interface IContributorFormArrayElement {
  [ContributorFormArrayElementKeys.Name]: string;
  [ContributorFormArrayElementKeys.Incomes]: IIncomeFormArrayElement[];
  [ContributorFormArrayElementKeys.Allowances]: IAllowanceFormArrayElement[];
  [ContributorFormArrayElementKeys.Deductions]: IDeductionFormArrayElement[];
}
