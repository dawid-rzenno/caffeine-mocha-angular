import {BudgetContributorControlInterface} from "../../budget-contributors-control/common/budget-contributor-control.interface";
import {BudgetGeneralControlInterface} from "../../budget-general-control/common/budget-general-control.interface";
import {
  SimpleTableRowControlInterface as FormArrayElement
} from "../../../../common/components/simple-table/common/simple-table-row-control.interface";

export enum BudgetControlKey {
  ID = 'id',
  Details = 'details',
  Outcomes = 'outcomes',
  Contributors = 'contributors'
}

export interface BudgetControlInterface {
  [BudgetControlKey.ID]: string,
  [BudgetControlKey.Details]: BudgetGeneralControlInterface,
  [BudgetControlKey.Outcomes]: FormArrayElement[],
  [BudgetControlKey.Contributors]: BudgetContributorControlInterface[]
}

