import {
  ISimpleListCompatibleFormArrayElement as FormArrayElement,
  ISimpleListCompatibleObjectArrayElement as ObjectArrayElement
} from "../../../shared/components/simple-list/simple-list";

export enum ContributorFormArrayElementKeys {
  ID = 'id',
  Name = 'name',
  Incomes = 'incomes',
  Allowances = 'allowances',
  Deductions = 'deductions'
}

export interface IContributorFormArrayElement {
  [ContributorFormArrayElementKeys.ID]: string;
  [ContributorFormArrayElementKeys.Name]: string;
  [ContributorFormArrayElementKeys.Incomes]: FormArrayElement[];
  [ContributorFormArrayElementKeys.Allowances]: FormArrayElement[];
  [ContributorFormArrayElementKeys.Deductions]: FormArrayElement[];
}

export interface IContributor {
  id: string;
  name: string;
  incomes: ObjectArrayElement[];
  allowances: ObjectArrayElement[];
  deductions: ObjectArrayElement[];
}
