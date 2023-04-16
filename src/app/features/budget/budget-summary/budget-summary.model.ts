import {SimpleTableRow} from "../../../common/components/simple-table/common/simple-table-row-form-group.model";
import {BudgetContributor} from "../budget-contributors-form-array/common/budget-contributor-form-group-value.model";

export class BudgetContributorSummary {
  readonly name: string;
  readonly totalIncome: number;
  readonly contributionAmount: number;
  readonly totalFree: number;

  constructor(
    budgetContributor: BudgetContributor,
    totalBudgetIncome: number,
    totalBudgetOutcome: number
  ) {
    let totalContributorIncome: number = 0;

    budgetContributor.incomes.forEach((income: SimpleTableRow) => totalContributorIncome += income.value);
    budgetContributor.deductions.forEach((deduction: SimpleTableRow) => totalContributorIncome += deduction.value);
    budgetContributor.allowances.forEach((allowance: SimpleTableRow) => totalContributorIncome -= allowance.value);

    let percentage: number = 0;

    if (totalBudgetIncome > 0) {
      percentage = totalContributorIncome / totalBudgetIncome;
    }

    const contributionAmount = percentage * totalBudgetOutcome;

    this.name = budgetContributor.name;
    this.totalIncome = totalContributorIncome;
    this.contributionAmount = percentage * totalBudgetOutcome;
    this.totalFree = totalContributorIncome - contributionAmount;
  }
}
