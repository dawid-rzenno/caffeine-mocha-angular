import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BudgetListColumnKeys, IBudgetListElement} from "./budget-list";
import {IContributor} from "../contributors-form-array/contributors-form-array";
import {IBudget} from "../budget-form-group/budget-form-group";
import {ListComponentAbstract} from "../../../shared/abstracts/list-component.abstract";
import {ISimpleListCompatibleObjectArrayElement} from "../../../shared/components/simple-list/simple-list";

@Component({
  selector: 'mocha-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.scss']
})
export class BudgetListComponent extends ListComponentAbstract<IBudgetListElement, typeof BudgetListColumnKeys, BudgetListColumnKeys> implements OnInit {
  public readonly DisplayedColumnKeys = BudgetListColumnKeys;
  public readonly DisplayedColumns = [
    BudgetListColumnKeys.Name,
    BudgetListColumnKeys.TotalOutcomeValue,
    BudgetListColumnKeys.TotalIncomeValue,
    BudgetListColumnKeys.ContributorsCount,
    BudgetListColumnKeys.Actions
  ];

  public header: string = '';

  constructor(private route: ActivatedRoute) {
    super();
  }

  public ngOnInit() {
    this.route.data.subscribe(data => {
      this.header = data['header'] ? data['header'] : '';
      this.dataSource = data['budgets'] ? BudgetListComponent.createDataSource(data['budgets']) : [];
    })
  }

  public static createDataSource(budgets: IBudget[]): IBudgetListElement[] {
    return budgets.map((budget: IBudget) => {

      let totalOutcomeValue = 0;
      budget.outcomes.forEach(outcome => totalOutcomeValue += outcome.value);

      let totalIncomeValue: number = 0;
      budget.contributors.forEach((contributor: IContributor) => {
        contributor.incomes.forEach((income: ISimpleListCompatibleObjectArrayElement) => totalIncomeValue += income.value);
        contributor.deductions.forEach((deduction: ISimpleListCompatibleObjectArrayElement) => totalIncomeValue += deduction.value);
        contributor.allowances.forEach((allowance: ISimpleListCompatibleObjectArrayElement) => totalIncomeValue -= allowance.value);
      });

      return {
        [BudgetListColumnKeys.ID]: budget.id,
        [BudgetListColumnKeys.Name]: budget.details.name,
        [BudgetListColumnKeys.TotalOutcomeValue]: totalOutcomeValue,
        [BudgetListColumnKeys.TotalIncomeValue]: totalIncomeValue,
        [BudgetListColumnKeys.ContributorsCount]: budget.contributors.length,
      } as IBudgetListElement;
    });
  }
}
