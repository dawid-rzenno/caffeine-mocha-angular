import {FormControl, FormGroup} from "@angular/forms";
import {
  SimpleTableRowFormArray
} from "../../../../common/components/simple-table/common/simple-table-row-form-array.model";
import {FormControlValue, ID} from "../../../../common/types/id.type";
import {
  SimpleTableRow,
  SimpleTableRowFormGroupValue
} from "../../../../common/components/simple-table/common/simple-table-row-form-group.model";

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
  [BudgetContributorControlKey.Incomes]: SimpleTableRowFormGroupValue[];
  [BudgetContributorControlKey.Allowances]: SimpleTableRowFormGroupValue[];
  [BudgetContributorControlKey.Deductions]: SimpleTableRowFormGroupValue[];
}

export interface BudgetContributor {
  id: ID;
  name: string;
  incomes: SimpleTableRow[];
  allowances: SimpleTableRow[];
  deductions: SimpleTableRow[];
}
