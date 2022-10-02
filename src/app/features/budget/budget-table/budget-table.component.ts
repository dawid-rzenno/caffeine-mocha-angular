import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BudgetTableRowKey, IBudgetListElement} from "./common/budget-table-row.interface";
import {TableComponentAbstract} from "../../../shared/abstracts/table-component.abstract";
import {ActionLabel} from 'src/app/shared/constants/action-label.enum';
import {BudgetActionLabel, BudgetColumnLabel} from "../budget-form/common/budget-label.enum";
import {BudgetInterface} from "../budget-form/common/budget.interface";
import {DirectAppPath} from "../../../shared/constants/direct-app-path.const";
import {ContributorInterface} from "../contributors-control/common/contributor.interface";
import {
  SimpleTableRowInterface
} from "../../../shared/components/simple-table/common/simple-table-row.interface";

@Component({
  selector: 'mocha-budget-table',
  templateUrl: './budget-table.component.html',
  styleUrls: ['./budget-table.component.scss']
})
export class BudgetTableComponent extends TableComponentAbstract<IBudgetListElement, typeof BudgetTableRowKey, BudgetTableRowKey> implements OnInit {
  public readonly ActionLabels = {...ActionLabel, ...BudgetActionLabel};
  public readonly ColumnLabels = BudgetColumnLabel;
  public readonly DirectPaths = DirectAppPath;
  public readonly ColumnKeys = BudgetTableRowKey;
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
      this.header = data['header'] ? data['header'] : '';
      this.dataSource = data['budgets'] ? BudgetTableComponent.createDataSource(data['budgets']) : [];
    })
  }

  public static createDataSource(budgets: BudgetInterface[]): IBudgetListElement[] {
    return budgets.map((budget: BudgetInterface) => {

      let totalOutcomeValue = 0;
      budget.outcomes.forEach(outcome => totalOutcomeValue += outcome.value);

      let totalIncomeValue: number = 0;
      budget.contributors.forEach((contributor: ContributorInterface) => {
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
      } as IBudgetListElement;
    });
  }
}
