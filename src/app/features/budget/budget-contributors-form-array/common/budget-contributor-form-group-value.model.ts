import {FormControl, FormGroup} from "@angular/forms";
import {
  SimpleTableRowFormArray,
  SimpleTableRowFormArrayValues
} from "../../../../common/components/simple-table/common/simple-table-row-form-array.model";
import {SimpleTableRow} from "../../../../common/components/simple-table/common/simple-table-row-form-group.model";
import {FormControlValue, ID} from "../../../../common/types/id.type";

export enum BudgetContributorControlKey {
  ID = 'id',
  Name = 'name',
  Incomes = 'incomes',
  Allowances = 'allowances',
  Deductions = 'deductions'
}

export type BudgetContributorFormGroupControls = {
  [BudgetContributorControlKey.ID]: FormControl<FormControlValue<ID>>;
  [BudgetContributorControlKey.Name]: FormControl<FormControlValue<string>>;
  [BudgetContributorControlKey.Incomes]: SimpleTableRowFormArray;
  [BudgetContributorControlKey.Allowances]: SimpleTableRowFormArray;
  [BudgetContributorControlKey.Deductions]: SimpleTableRowFormArray;
}

export class BudgetContributorFormGroup extends FormGroup<BudgetContributorFormGroupControls> {
}

export type BudgetContributorFormGroupValue = {
  [BudgetContributorControlKey.ID]: FormControlValue<string>;
  [BudgetContributorControlKey.Name]: FormControlValue<string>;
  [BudgetContributorControlKey.Incomes]: SimpleTableRowFormArrayValues;
  [BudgetContributorControlKey.Allowances]: SimpleTableRowFormArrayValues;
  [BudgetContributorControlKey.Deductions]: SimpleTableRowFormArrayValues;
}

export interface BudgetContributor {
  id: ID;
  name: string;
  incomes: SimpleTableRow[];
  allowances: SimpleTableRow[];
  deductions: SimpleTableRow[];
}
