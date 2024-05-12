import {BudgetGeneral} from "../../budget-general-control/common/budget-general";
import {BudgetContributor} from "../../budget-contributors-control/common/budget-contributor";
import {SimpleTableRow} from "../../../../common/components/simple-table/common/simple-table-row";

export interface Budget {
  id: string;
  details: BudgetGeneral;
  outcomes: SimpleTableRow[];
  contributors: BudgetContributor[];
}
