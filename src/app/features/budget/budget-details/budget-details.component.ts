import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IBudgetFormGroupRawValue} from "../budget-form-group/budget-form-group";
import {IContributorFormArrayElement} from "../contributors-form-array/contributors-form-array";
import {IIncomeFormArrayElement} from "../incomes-form-array/incomes-form-array";
import {IDeductionFormArrayElement} from "../deductions-form-array/deductions-form-array";
import {IAllowanceFormArrayElement} from "../allowances-form-array/allowances-form-array";
import {IOutcomesFormArrayElement} from "../outcomes-form-array/outcomes-form-array";
import {ActivatedRoute} from "@angular/router";
import {IContributorTile} from "../contributor-tile/contributor-tile";

@Component({
  selector: 'mocha-budget-details',
  templateUrl: './budget-details.component.html',
  styleUrls: ['./budget-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BudgetDetailsComponent {
  public header: string = ''
  public budgetName: string = ''
  public contributorTiles: IContributorTile[] = [];
  public totalBudgetOutcome: number = 0;
  public totalContributorsIncome: number = 0;
  public outcomes: IOutcomesFormArrayElement[] = [];

  @Input() hideHeader: boolean = false;

  @Input() set budget(budgetFormGroupRawValue: IBudgetFormGroupRawValue) {
    if (budgetFormGroupRawValue) {
      this.budgetName = budgetFormGroupRawValue.details.name;
      this.totalBudgetOutcome = BudgetDetailsComponent.calculateTotalBudgetOutcome(budgetFormGroupRawValue);
      this.totalContributorsIncome = BudgetDetailsComponent.calculateTotalContributorsIncome(budgetFormGroupRawValue);
      this.contributorTiles = BudgetDetailsComponent.createDataForContributorTiles(
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

  json(obj: any): string {
    return JSON.stringify(obj, null, 4);
  }

  constructor(private route: ActivatedRoute) {}

  public ngOnInit() {
    this.route.data.subscribe(data => {
      this.header = data['header'];
      this.budget = data['budget'];
    })
  }

  private static calculateTotalBudgetOutcome(budget: IBudgetFormGroupRawValue): number {
    let total = 0;

    budget.outcomes.forEach((outcome: IOutcomesFormArrayElement) => total += outcome.value)

    return total;
  }

  private static calculateTotalContributorsIncome(budget: IBudgetFormGroupRawValue): number {
    let total = 0;

    budget.contributors.forEach((contributor: IContributorFormArrayElement) => {
      contributor.incomes.forEach((income: IIncomeFormArrayElement) => total += income.value)
    })

    return total;
  }

  private static createDataForContributorTiles(budget: IBudgetFormGroupRawValue, totalBudgetIncome: number, totalBudgetOutcome: number): IContributorTile[] {
    return [...budget.contributors.map((contributor: IContributorFormArrayElement) => {

      let totalContributorIncome: number = 0;

      contributor.incomes.forEach((income: IIncomeFormArrayElement) => totalContributorIncome += income.value);
      contributor.deductions.forEach((deduction: IDeductionFormArrayElement) => totalContributorIncome += deduction.value);
      contributor.allowances.forEach((allowance: IAllowanceFormArrayElement) => totalContributorIncome -= allowance.value);

      const percentage: number = totalContributorIncome / totalBudgetIncome;

      return {
        name: contributor.name,
        totalIncome: totalContributorIncome,
        contributionAmount: percentage * totalBudgetOutcome
      }
    })];
  }
}
