import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BudgetTableRowKey, IBudgetTableRowInterface} from "./common/budget-table-row.interface";
import {TableComponentAbstract} from "../../../common/abstracts/table-component.abstract";
import {ActionLabel} from 'src/app/common/constants/action-label.enum';
import {BudgetActionLabel} from "../budget-form/common/budget-action-label.enum";
import {BudgetHeader} from "../common/route-data-header.enum";
import {BUDGET_DIRECT_ROUTE, BudgetDirectRouteKey} from "../../../common/constants/budget-direct-route-key.const";
import {BudgetColumnLabel} from "../budget-form/common/budget-column-label.enum";
import {Budget} from "../budget-form/common/budget-form-group.model";
import {SimpleTableRow} from "../../../common/components/simple-table/common/simple-table-row-form-group.model";
import {BudgetContributor} from "../budget-contributors-form-array/common/budget-contributor-form-group-value.model";

@Component({
  selector: 'mocha-budget-table',
  templateUrl: './budget-table.component.html',
  styleUrls: ['./budget-table.component.scss']
})
export class BudgetTableComponent extends TableComponentAbstract<IBudgetTableRowInterface, typeof BudgetTableRowKey, BudgetTableRowKey> implements OnInit {
  public readonly ActionLabels = {...ActionLabel, ...BudgetActionLabel};
  public readonly BudgetHeader = BudgetHeader;
  public readonly ColumnLabels = BudgetColumnLabel;
  public readonly BudgetDirectRoute = BUDGET_DIRECT_ROUTE;
  public readonly BudgetDirectRouteKey = BudgetDirectRouteKey;
  public readonly ColumnKey = BudgetTableRowKey;
  public readonly DisplayedColumnKeys = [
    BudgetTableRowKey.Name,
    BudgetTableRowKey.TotalOutcomeValue,
    BudgetTableRowKey.TotalIncomeValue,
    BudgetTableRowKey.ContributorsCount,
    BudgetTableRowKey.Actions
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

  public static createDataSource(budgets: Budget[]): IBudgetTableRowInterface[] {
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
        [BudgetTableRowKey.ID]: budget.id,
        [BudgetTableRowKey.Name]: budget.details.name,
        [BudgetTableRowKey.TotalOutcomeValue]: totalOutcomeValue,
        [BudgetTableRowKey.TotalIncomeValue]: totalIncomeValue,
        [BudgetTableRowKey.ContributorsCount]: budget.contributors.length,
      } as IBudgetTableRowInterface;
    });
  }
}
