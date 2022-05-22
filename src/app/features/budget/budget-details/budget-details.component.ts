import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IBudgetFormGroupRawValue} from "../budget-form-group/budget-form-group";
import {IContributorFormArrayElement} from "../contributors-form-array/contributors-form-array";
import {IIncomeFormArrayElement} from "../incomes-form-array/incomes-form-array";
import {IDeductionFormArrayElement} from "../deductions-form-array/deductions-form-array";
import {IAllowanceFormArrayElement} from "../allowances-form-array/allowances-form-array";
import {IOutcomesFormArrayElement} from "../outcomes-form-array/outcomes-form-array";

interface IContributor {
  name: string;
  totalIncome: number;
  contributionAmount: number;
}

@Component({
  selector: 'mocha-budget-details',
  templateUrl: './budget-details.component.html',
  styleUrls: ['./budget-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BudgetDetailsComponent {
  public contributors: IContributor[] = [];
  public totalBudgetOutcome: number = 0;
  public totalBudgetIncome: number = 0;

  @Input() set budget(value: IBudgetFormGroupRawValue) {
    this.totalBudgetOutcome = BudgetDetailsComponent.calculateTotalOutcome(value);
    this.totalBudgetIncome = BudgetDetailsComponent.calculateTotalIncome(value);
    this.contributors = BudgetDetailsComponent.calculateContributions(value, this.totalBudgetIncome, this.totalBudgetOutcome);
  };

  json(obj: any): string {
    return JSON.stringify(obj, null, 4);
  }

  private static calculateTotalOutcome(budget: IBudgetFormGroupRawValue): number {
    let total = 0;

    budget.outcomes.forEach((outcome: IOutcomesFormArrayElement) => total += outcome.value)

    return total;
  }

  private static calculateTotalIncome(budget: IBudgetFormGroupRawValue): number {
    let total = 0;

    budget.contributors.forEach((contributor: IContributorFormArrayElement) => {
      contributor.incomes.forEach((income: IIncomeFormArrayElement) => total += income.value)
    })

    return total;
  }

  private static calculateContributions(budget: IBudgetFormGroupRawValue, totalBudgetIncome: number, totalBudgetOutcome: number): IContributor[] {
    const contributors: IContributor[] = [];

    budget.contributors.forEach((contributor: IContributorFormArrayElement) => {

      let totalContributorIncome: number = 0;

      contributor.incomes.forEach((income: IIncomeFormArrayElement) => totalContributorIncome += income.value)
      contributor.deductions.forEach((deduction: IDeductionFormArrayElement) => totalContributorIncome += deduction.value)
      contributor.allowances.forEach((allowance: IAllowanceFormArrayElement) => totalContributorIncome -= allowance.value)

      const percentage: number = totalContributorIncome / totalBudgetIncome

      contributors.push({
        name: contributor.name,
        totalIncome: totalContributorIncome,
        contributionAmount: percentage * totalBudgetOutcome
      })
    })

    return contributors;
  }
}
