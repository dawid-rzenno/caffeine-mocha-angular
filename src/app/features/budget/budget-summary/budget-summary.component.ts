import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Budget, BudgetFormGroupValue} from "../budget-form-group/common/budget-form-group.model";
import {ActivatedRoute} from "@angular/router";
import {BudgetContributorSummary} from "./budget-summary.model";
import {BudgetHeader} from "../common/route-data-header.enum";
import {BudgetSummaryService} from "./budget-summary.service";
import {ID} from "../../../common/types/id.type";
import {SimpleTableRow} from "../../../common/components/simple-table/common/simple-table-row-form-group.model";

export interface BudgetSummary {
  id: ID;
  budgetName: string;
  incomeTotal: number;
  outcomeTotal: number;
  outcomes: SimpleTableRow[];
  contributorSummaries: BudgetContributorSummary[];
}

@Component({
  selector: 'mocha-budget-summary',
  templateUrl: './budget-summary.component.html',
  styleUrls: ['./budget-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BudgetSummaryComponent implements OnInit, BudgetSummary {
  readonly BudgetHeader = BudgetHeader;

  id: ID = '';
  budgetName = '';
  contributorSummaries: BudgetContributorSummary[] = [];
  outcomeTotal = 0;
  incomeTotal = 0;
  outcomes: SimpleTableRow[] = [];

  @Input() hideHeader: boolean = false;

  constructor(private route: ActivatedRoute, private service: BudgetSummaryService) {
  }

  @Input() set budget(budget: BudgetFormGroupValue) {
    if (budget) {
      if (budget.id) {
        this.loadBudgetSummary(budget.id as ID);
      } else {
        this.createBudgetSummaryPreview(budget as Budget)
      }
    } else {
      this.handleEmptyBudget();
    }
  };

  createBudgetSummaryPreview(budget: Budget): void {
    this.budgetName = budget.details.name;
    this.outcomeTotal = BudgetSummaryService.calculateTotalBudgetOutcome(budget.outcomes);
    this.incomeTotal = BudgetSummaryService.calculateTotalContributorsIncome(budget.contributors);
    this.contributorSummaries = BudgetSummaryService.createBudgetSummaries(budget.contributors, this.incomeTotal, this.outcomeTotal);
    this.outcomes = budget.outcomes;
  }

  loadBudgetSummary(budgetId: ID): void {
    this.service.getBudgetSummary$(budgetId).subscribe((budgetSummary: BudgetSummary) => {
      this.id = budgetSummary.id;
      this.budgetName = budgetSummary.budgetName;
      this.outcomeTotal = budgetSummary.outcomeTotal;
      this.incomeTotal = budgetSummary.incomeTotal;
      this.contributorSummaries = budgetSummary.contributorSummaries;
      this.outcomes = budgetSummary.outcomes;
    });
  }

  handleEmptyBudget(): void {
    this.budgetName = 'Unknown';
    this.outcomeTotal = 0;
    this.contributorSummaries = [];
    this.outcomes = [];
  }

  public ngOnInit() {
    this.route.data.subscribe(data => {
      this.budget = data['budget'];
    })
  }
}
