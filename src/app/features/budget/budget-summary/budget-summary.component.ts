import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {BudgetControl} from "../budget-form/common/budget-control";
import {
  BudgetContributorControl
} from "../budget-contributors-control/common/budget-contributor-control";
import {ActivatedRoute} from "@angular/router";
import {BudgetContributorTile} from "../budget-contributor-tile/common/budget-contributor-tile";
import {BudgetHeaders} from "../common/budget-headers";
import {
  SimpleTableRowControl
} from "../../../common/components/simple-table/common/simple-table-row-control";

@Component({
  selector: 'mocha-budget-summary',
  templateUrl: './budget-summary.component.html',
  styleUrls: ['./budget-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BudgetSummaryComponent implements OnInit {
  public readonly BudgetHeader = BudgetHeaders;
  public budgetName: string = ''
  public contributorTiles: BudgetContributorTile[] = [];
  public totalBudgetOutcome: number = 0;
  public totalContributorsIncome: number = 0;
  public outcomes: SimpleTableRowControl[] = [];

  @Input() hideHeader: boolean = false;

  @Input() set budget(budgetFormGroupRawValue: BudgetControl) {
    if (budgetFormGroupRawValue) {
      this.budgetName = budgetFormGroupRawValue.details.name;
      this.totalBudgetOutcome = BudgetSummaryComponent.calculateTotalBudgetOutcome(budgetFormGroupRawValue);
      this.totalContributorsIncome = BudgetSummaryComponent.calculateTotalContributorsIncome(budgetFormGroupRawValue);
      this.contributorTiles = BudgetSummaryComponent.createDataForContributorTiles(
        budgetFormGroupRawValue,
        this.totalContributorsIncome,
        this.totalBudgetOutcome
      );
      this.outcomes = budgetFormGroupRawValue.outcomes;
    } else {
      this.budgetName = '';
      this.totalBudgetOutcome = 0;
      this.contributorTiles = [];
      this.outcomes = [];
    }
  };

  constructor(private route: ActivatedRoute) {}

  public ngOnInit() {
    this.route.data.subscribe(data => {
      this.budget = data['budget'];
    })
  }

  private static calculateTotalBudgetOutcome(budget: BudgetControl): number {
    let total = 0;

    budget.outcomes.forEach((outcome: SimpleTableRowControl) => total += outcome.value)

    return total;
  }

  private static calculateTotalContributorsIncome(budget: BudgetControl): number {
    let total = 0;

    budget.contributors.forEach((contributor: BudgetContributorControl) => {
      contributor.incomes.forEach((income: SimpleTableRowControl) => total += income.value)
    })

    return total;
  }

  private static createDataForContributorTiles(
    budget: BudgetControl,
    totalBudgetIncome: number,
    totalBudgetOutcome: number
  ): BudgetContributorTile[] {
    return budget.contributors.map((contributor: BudgetContributorControl) => {

      let totalContributorIncome: number = 0;

      contributor.incomes.forEach((income: SimpleTableRowControl) => totalContributorIncome += income.value);
      contributor.deductions.forEach((deduction: SimpleTableRowControl) => totalContributorIncome += deduction.value);
      contributor.allowances.forEach((allowance: SimpleTableRowControl) => totalContributorIncome -= allowance.value);

      let percentage: number = 0;

      if (totalBudgetIncome > 0) {
        percentage = totalContributorIncome / totalBudgetIncome;
      }

      return {
        name: contributor.name,
        totalIncome: totalContributorIncome,
        contributionAmount: percentage * totalBudgetOutcome
      }
    });
  }
}
