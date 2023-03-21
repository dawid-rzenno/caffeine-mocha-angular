import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {BudgetFormGroup} from "../budget-form/common/budget-form-group.model";
import {
  BudgetContributorFormGroupValue
} from "../budget-contributors-form-array/common/budget-contributor-form-group-value.model";
import {ActivatedRoute} from "@angular/router";
import {BudgetContributorTileInterface} from "../budget-contributor-tile/common/budget-contributor-tile.interface";
import {BudgetHeader} from "../common/route-data-header.enum";
import {
  SimpleTableRowFormGroupValue
} from "../../../common/components/simple-table/common/simple-table-row-form-group.model";

@Component({
  selector: 'mocha-budget-summary',
  templateUrl: './budget-summary.component.html',
  styleUrls: ['./budget-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BudgetSummaryComponent implements OnInit {
  public readonly BudgetHeader = BudgetHeader;
  public budgetName: string = ''
  public contributorTiles: BudgetContributorTileInterface[] = [];
  public totalBudgetOutcome: number = 0;
  public totalContributorsIncome: number = 0;
  public outcomes: SimpleTableRowFormGroupValue[] = [];

  @Input() hideHeader: boolean = false;

  @Input() set budget(budgetFormGroupRawValue: BudgetFormGroup) {
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

  private static calculateTotalBudgetOutcome(budget: BudgetFormGroup): number {
    let total = 0;

    budget.outcomes.forEach((outcome: SimpleTableRowFormGroupValue) => total += outcome.value)

    return total;
  }

  private static calculateTotalContributorsIncome(budget: BudgetFormGroup): number {
    let total = 0;

    budget.contributors.forEach((contributor: BudgetContributorFormGroupValue) => {
      contributor.incomes.forEach((income: SimpleTableRowFormGroupValue) => total += income.value)
    })

    return total;
  }

  private static createDataForContributorTiles(
    budget: BudgetFormGroup,
    totalBudgetIncome: number,
    totalBudgetOutcome: number
  ): BudgetContributorTileInterface[] {
    return budget.contributors.map((contributor: BudgetContributorFormGroupValue) => {

      let totalContributorIncome: number = 0;

      contributor.incomes.forEach((income: SimpleTableRowFormGroupValue) => totalContributorIncome += income.value);
      contributor.deductions.forEach((deduction: SimpleTableRowFormGroupValue) => totalContributorIncome += deduction.value);
      contributor.allowances.forEach((allowance: SimpleTableRowFormGroupValue) => totalContributorIncome -= allowance.value);

      let percentage: number = 0;

      if (totalBudgetIncome > 0) {
        percentage = totalContributorIncome / totalBudgetIncome;
      }

      const contributionAmount = percentage * totalBudgetOutcome;

      return {
        name: contributor.name,
        totalIncome: totalContributorIncome,
        contributionAmount: percentage * totalBudgetOutcome,
        totalFree: totalContributorIncome - contributionAmount
      }
    });
  }
}
