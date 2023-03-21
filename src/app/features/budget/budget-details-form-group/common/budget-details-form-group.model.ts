import {FormControl, FormGroup} from "@angular/forms";
import {FormControlValue, ID} from "../../../../common/types/id.type";

export enum BudgetDetailsFormGroupKey {
  ID = 'id',
  Name = 'name',
  Owner = 'owner',
}

export type BudgetDetailsFormGroupControls = {
  [BudgetDetailsFormGroupKey.ID]: FormControl<FormControlValue<ID>>,
  [BudgetDetailsFormGroupKey.Name]: FormControl<FormControlValue<string>>,
  [BudgetDetailsFormGroupKey.Owner]: FormControl<FormControlValue<string>>,
}

export class BudgetDetailsFormGroup extends FormGroup<BudgetDetailsFormGroupControls> {
}

export type BudgetDetailsFormGroupValue = {
  [BudgetDetailsFormGroupKey.ID]: FormControlValue<ID>,
  [BudgetDetailsFormGroupKey.Name]: FormControlValue<string>,
  [BudgetDetailsFormGroupKey.Owner]: FormControlValue<string>,
}

export type BudgetDetails = {
  id: ID;
  name: string;
  owner: string;
}
