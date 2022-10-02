import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {BudgetControlInterface} from "../budget-form/common/budget-control.interface";
import {ContributorControlInterface} from "../contributors-control/common/contributor-control.interface";
import {ActivatedRoute} from "@angular/router";
import {ContributorTileInterface} from "../contributor-tile/common/contributor-tile.interface";
import {Header} from "../../../shared/constants/header.enum";
import {
  SimpleTableRowControlInterface
} from "../../../shared/components/simple-table/common/simple-table-row-control.interface";

@Component({
  selector: 'mocha-budget-inspection',
  templateUrl: './budget-inspection.component.html',
  styleUrls: ['./budget-inspection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BudgetInspectionComponent {
  public header: string = Header.BudgetDetails
  public budgetName: string = ''
  public contributorTiles: ContributorTileInterface[] = [];
  public totalBudgetOutcome: number = 0;
  public totalContributorsIncome: number = 0;
  public outcomes: SimpleTableRowControlInterface[] = [];

  @Input() hideHeader: boolean = false;

  @Input() set budget(budgetFormGroupRawValue: BudgetControlInterface) {
    if (budgetFormGroupRawValue) {
      this.budgetName = budgetFormGroupRawValue.details.name;
      this.totalBudgetOutcome = BudgetInspectionComponent.calculateTotalBudgetOutcome(budgetFormGroupRawValue);
      this.totalContributorsIncome = BudgetInspectionComponent.calculateTotalContributorsIncome(budgetFormGroupRawValue);
      this.contributorTiles = BudgetInspectionComponent.createDataForContributorTiles(
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

    budget.contributors.forEach((contributor: ContributorControlInterface) => {
      contributor.incomes.forEach((income: SimpleTableRowControlInterface) => total += income.value)
    })

    return total;
  }

  private static createDataForContributorTiles(
    budget: BudgetControlInterface,
    totalBudgetIncome: number,
    totalBudgetOutcome: number
  ): ContributorTileInterface[] {
    return budget.contributors.map((contributor: ContributorControlInterface) => {

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
