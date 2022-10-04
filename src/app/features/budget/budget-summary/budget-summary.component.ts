import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {BudgetControlInterface} from "../budget-form/common/budget-control.interface";
import {
  BudgetContributorControlInterface
} from "../budget-contributors-control/common/budget-contributor-control.interface";
import {ActivatedRoute} from "@angular/router";
import {BudgetContributorTileInterface} from "../budget-contributor-tile/common/budget-contributor-tile.interface";
import {RouteDataHeader} from "../../../common/constants/route-data-header.enum";
import {
  SimpleTableRowControlInterface
} from "../../../common/components/simple-table/common/simple-table-row-control.interface";

@Component({
  selector: 'mocha-budget-summary',
  templateUrl: './budget-summary.component.html',
  styleUrls: ['./budget-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BudgetSummaryComponent {
  public header: string = RouteDataHeader.InspectBudget
  public budgetName: string = ''
  public contributorTiles: BudgetContributorTileInterface[] = [];
  public totalBudgetOutcome: number = 0;
  public totalContributorsIncome: number = 0;
  public outcomes: SimpleTableRowControlInterface[] = [];

  @Input() hideHeader: boolean = false;

  @Input() set budget(budgetFormGroupRawValue: BudgetControlInterface) {
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
      this.header = data['header'];
      this.budget = data['budget'];
    })
  }

  private static calculateTotalBudgetOutcome(budget: BudgetControlInterface): number {
    let total = 0;

    budget.outcomes.forEach((outcome: SimpleTableRowControlInterface) => total += outcome.value)

    return total;
  }

  private static calculateTotalContributorsIncome(budget: BudgetControlInterface): number {
    let total = 0;

    budget.contributors.forEach((contributor: BudgetContributorControlInterface) => {
      contributor.incomes.forEach((income: SimpleTableRowControlInterface) => total += income.value)
    })

    return total;
  }

  private static createDataForContributorTiles(
    budget: BudgetControlInterface,
    totalBudgetIncome: number,
    totalBudgetOutcome: number
  ): BudgetContributorTileInterface[] {
    return budget.contributors.map((contributor: BudgetContributorControlInterface) => {

      let totalContributorIncome: number = 0;

      contributor.incomes.forEach((income: SimpleTableRowControlInterface) => totalContributorIncome += income.value);
      contributor.deductions.forEach((deduction: SimpleTableRowControlInterface) => totalContributorIncome += deduction.value);
      contributor.allowances.forEach((allowance: SimpleTableRowControlInterface) => totalContributorIncome -= allowance.value);

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
