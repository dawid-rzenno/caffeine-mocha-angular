import {BudgetGeneralInterface} from "../../budget-general-control/common/budget-general.interface";
import {BudgetContributorInterface} from "../../budget-contributors-control/common/budget-contributor.interface";
import {SimpleTableRowInterface} from "../../../../common/components/simple-table/common/simple-table-row.interface";

export interface BudgetInterface {
  id: string;
  details: BudgetGeneralInterface;
  outcomes: SimpleTableRowInterface[];
  contributors: BudgetContributorInterface[];
}
