import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ListComponentAbstract} from "../../../abstracts/list-component.abstract";
import {BudgetListKeys, IBudgetListElement} from "./budget-list";
import {IBudgetFormGroupRawValue} from "../budget-form-group/budget-form-group";
import {IContributorFormArrayElement} from "../contributors-form-array/contributors-form-array";
import {IIncomeFormArrayElement} from "../incomes-form-array/incomes-form-array";
import {IDeductionFormArrayElement} from "../deductions-form-array/deductions-form-array";
import {IAllowanceFormArrayElement} from "../allowances-form-array/allowances-form-array";

@Component({
  selector: 'mocha-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.scss']
})
export class BudgetListComponent extends ListComponentAbstract<typeof BudgetListKeys, BudgetListKeys, IBudgetListElement> implements OnInit {
  public header: string = '';

  constructor(private route: ActivatedRoute) {
    const displayedColumns: BudgetListKeys[] = [
      BudgetListKeys.Name,
      BudgetListKeys.TotalOutcomeValue,
      BudgetListKeys.TotalIncomeValue,
      BudgetListKeys.ContributorsCount,
      BudgetListKeys.Actions
    ];
    super(BudgetListKeys, displayedColumns, []);
  }

  public ngOnInit() {
    this.route.data.subscribe(data => {
      this.header = data['header'];
      this.dataSource = data['budgets'] ? BudgetListComponent.createDataSource(data['budgets']) : [];
    })
  }

  public static createDataSource(budgets: IBudgetFormGroupRawValue[]): IBudgetListElement[] {
    return budgets.map((budget: IBudgetFormGroupRawValue) => {

      let totalOutcomeValue = 0;
      budget.outcomes.forEach(outcome => totalOutcomeValue += outcome.value);

      let totalIncomeValue: number = 0;
      budget.contributors.forEach((contributor: IContributorFormArrayElement) => {
        contributor.incomes.forEach((income: IIncomeFormArrayElement) => totalIncomeValue += income.value);
        contributor.deductions.forEach((deduction: IDeductionFormArrayElement) => totalIncomeValue += deduction.value);
        contributor.allowances.forEach((allowance: IAllowanceFormArrayElement) => totalIncomeValue -= allowance.value);
      });

      return {
        [BudgetListKeys.Name]: budget.details.name,
        [BudgetListKeys.TotalOutcomeValue]: totalOutcomeValue,
        [BudgetListKeys.TotalIncomeValue]: totalIncomeValue,
        [BudgetListKeys.ContributorsCount]: budget.contributors.length,
      } as IBudgetListElement;
    });
  }
}
