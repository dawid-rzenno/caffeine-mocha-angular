import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BudgetTableRowKey, IBudgetTableRowInterface} from "./common/budget-table-row.interface";
import {TableComponentAbstract} from "../../../common/abstracts/table-component.abstract";
import {ActionLabel} from 'src/app/common/constants/action-label.enum';
import {BudgetActionLabel, BudgetColumnLabel} from "../budget-form/common/budget-label.enum";
import {BudgetInterface} from "../budget-form/common/budget.interface";
import {BUDGET_DIRECT_ROUTE} from "../../../common/constants/direct-route.const";
import {BudgetContributorInterface} from "../budget-contributors-control/common/budget-contributor.interface";
import {SimpleTableRowInterface} from "../../../common/components/simple-table/common/simple-table-row.interface";
import {BudgetHeader} from "../common/route-data-header.enum";

@Component({
  selector: 'mocha-budget-table',
  templateUrl: './budget-table.component.html',
  styleUrls: ['./budget-table.component.scss']
})
export class BudgetTableComponent extends TableComponentAbstract<IBudgetTableRowInterface, typeof BudgetTableRowKey, BudgetTableRowKey> implements OnInit {
  public readonly ActionLabels = {...ActionLabel, ...BudgetActionLabel};
  public readonly RouteDataHeader = BudgetHeader;
  public readonly ColumnLabels = BudgetColumnLabel;
  public readonly DirectPath = BUDGET_DIRECT_ROUTE;
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

  public static createDataSource(budgets: BudgetInterface[]): IBudgetTableRowInterface[] {
    return budgets.map((budget: BudgetInterface) => {

      let totalOutcomeValue = 0;
      budget.outcomes.forEach(outcome => totalOutcomeValue += outcome.value);

      let totalIncomeValue: number = 0;
      budget.contributors.forEach((contributor: BudgetContributorInterface) => {
        contributor.incomes.forEach((income: SimpleTableRowInterface) => totalIncomeValue += income.value);
        contributor.deductions.forEach((deduction: SimpleTableRowInterface) => totalIncomeValue += deduction.value);
        contributor.allowances.forEach((allowance: SimpleTableRowInterface) => totalIncomeValue -= allowance.value);
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
