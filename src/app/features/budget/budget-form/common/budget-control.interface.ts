import {ContributorControlInterface} from "../../contributors-control/common/contributor-control.interface";
import {BudgetDetailsControlInterface} from "../../budget-details-control/common/budget-details-control.interface";
import {
  SimpleTableRowControlInterface as FormArrayElement
} from "../../../../shared/components/simple-table/common/simple-table-row-control.interface";

export enum BudgetControlKey {
  ID = 'id',
  Details = 'details',
  Outcomes = 'outcomes',
  Contributors = 'contributors'
}

export interface BudgetControlInterface {
  [BudgetControlKey.ID]: string,
  [BudgetControlKey.Details]: BudgetDetailsControlInterface,
  [BudgetControlKey.Outcomes]: FormArrayElement[],
  [BudgetControlKey.Contributors]: ContributorControlInterface[]
}

