import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BudgetTableRow} from "./common/budget-table-row";
import {TableComponent} from "../../../common/abstracts/table-component";
import {ActionLabels} from 'src/app/common/constants/action-labels';
import {BudgetActionLabels} from "../budget-form/common/budget-action-labels";
import {Budget} from "../budget-form/common/budget";
import {BudgetContributor} from "../budget-contributors-control/common/budget-contributor";
import {SimpleTableRow} from "../../../common/components/simple-table/common/simple-table-row";
import {BudgetHeaders} from "../common/budget-headers";
import {BudgetDirectRouteKeys} from "../../../common/constants/budget-direct-route-keys";
import { BudgetColumnLabels } from "../budget-form/common/budget-column-labels";
import { BudgetTableRowKeys } from "./common/budget-table-row-keys";
import { budgetDirectRoutes } from "../../../common/constants/budget-direct-routes";

@Component({
  selector: 'mocha-budget-table',
  templateUrl: './budget-table.component.html',
  styleUrls: ['./budget-table.component.scss']
})
export class BudgetTableComponent extends TableComponent<BudgetTableRow, typeof BudgetTableRowKeys, BudgetTableRowKeys> implements OnInit {
  public readonly ActionLabels = {...ActionLabels, ...BudgetActionLabels};
  public readonly BudgetHeader = BudgetHeaders;
  public readonly ColumnLabels = BudgetColumnLabels;
  public readonly BudgetDirectRoute = budgetDirectRoutes;
  public readonly BudgetDirectRouteKey = BudgetDirectRouteKeys;
  public readonly ColumnKey = BudgetTableRowKeys;
  public readonly DisplayedColumnKeys = [
    BudgetTableRowKeys.Name,
    BudgetTableRowKeys.TotalOutcomeValue,
    BudgetTableRowKeys.TotalIncomeValue,
    BudgetTableRowKeys.ContributorsCount,
    BudgetTableRowKeys.Actions
  ];

  public header: string = '';

  constructor(private route: ActivatedRoute) {
    super();
  }

  public ngOnInit() {
    this.route.data.subscribe(data => {
      this.dataSource = data['budgets'] ? BudgetTableComponent.createDataSource(data['budgets']) : [];
    })
  }

  public static createDataSource(budgets: Budget[]): BudgetTableRow[] {
    return budgets.map((budget: Budget) => {

      let totalOutcomeValue = 0;
      budget.outcomes.forEach(outcome => totalOutcomeValue += outcome.value);

      let totalIncomeValue: number = 0;
      budget.contributors.forEach((contributor: BudgetContributor) => {
        contributor.incomes.forEach((income: SimpleTableRow) => totalIncomeValue += income.value);
        contributor.deductions.forEach((deduction: SimpleTableRow) => totalIncomeValue += deduction.value);
        contributor.allowances.forEach((allowance: SimpleTableRow) => totalIncomeValue -= allowance.value);
      });

      return {
        [BudgetTableRowKeys.ID]: budget.id,
        [BudgetTableRowKeys.Name]: budget.details.name,
        [BudgetTableRowKeys.TotalOutcomeValue]: totalOutcomeValue,
        [BudgetTableRowKeys.TotalIncomeValue]: totalIncomeValue,
        [BudgetTableRowKeys.ContributorsCount]: budget.contributors.length,
      } as BudgetTableRow;
    });
  }
}
