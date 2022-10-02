import {BudgetDetailsInterface} from "../../budget-details-control/common/budget-details.interface";
import {ContributorInterface} from "../../contributors-control/common/contributor.interface";
import {SimpleTableRowInterface} from "../../../../shared/components/simple-table/common/simple-table-row.interface";

export interface BudgetInterface {
  id: string;
  details: BudgetDetailsInterface;
  outcomes: SimpleTableRowInterface[];
  contributors: ContributorInterface[];
}
