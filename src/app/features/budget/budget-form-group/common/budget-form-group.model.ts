import {
  BudgetDetails,
  BudgetDetailsFormGroup,
  BudgetDetailsFormGroupValue
} from "../../budget-details-form-group/common/budget-details-form-group.model";
import {FormControl, FormGroup} from "@angular/forms";
import {
  SimpleTableRowFormArray,
} from "../../../../common/components/simple-table/common/simple-table-row-form-array.model";
import {
  BudgetContributorFormArray
} from "../../budget-contributors-form-array/common/budget-contributor-form-array.model";
import {
  SimpleTableRow,
  SimpleTableRowFormGroupValue
} from "../../../../common/components/simple-table/common/simple-table-row-form-group.model";
import {
  BudgetContributor,
  BudgetContributorFormGroupValue
} from "../../budget-contributors-form-array/common/budget-contributor-form-group-value.model";
import {FormControlValue, ID} from "../../../../common/types/id.type";

export enum BudgetFormGroupKey {
  ID = 'id',
  Details = 'details',
  Outcomes = 'outcomes',
  Contributors = 'contributors'
}

export type BudgetFormGroupControls = {
  [BudgetFormGroupKey.ID]: FormControl<FormControlValue<ID>>,
  [BudgetFormGroupKey.Details]: BudgetDetailsFormGroup,
  [BudgetFormGroupKey.Outcomes]: SimpleTableRowFormArray,
  [BudgetFormGroupKey.Contributors]: BudgetContributorFormArray
}

export class BudgetFormGroup extends FormGroup<BudgetFormGroupControls> {
}

export type BudgetFormGroupValue = {
  [BudgetFormGroupKey.ID]: FormControlValue<ID>,
  [BudgetFormGroupKey.Details]: BudgetDetailsFormGroupValue,
  [BudgetFormGroupKey.Outcomes]: SimpleTableRowFormGroupValue[],
  [BudgetFormGroupKey.Contributors]: BudgetContributorFormGroupValue[]
}

export type Budget = {
  id: ID;
  details: BudgetDetails;
  outcomes: SimpleTableRow[];
  contributors: BudgetContributor[];
}
