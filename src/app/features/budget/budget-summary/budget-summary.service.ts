import {Injectable} from '@angular/core';
import {BudgetContributorSummary} from "./budget-summary.model";
import {SimpleTableRow} from "../../../common/components/simple-table/common/simple-table-row-form-group.model";
import {BudgetContributor} from "../budget-contributors-form-array/common/budget-contributor-form-group-value.model";
import {ID} from "../../../common/types/id.type";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {BudgetSummary} from "./budget-summary.component";

@Injectable({
  providedIn: 'root'
})
export class BudgetSummaryService {
  constructor(private http: HttpClient) {
  }

  static createBudgetSummaries(
    budgetContributors: BudgetContributor[],
    totalBudgetIncome: number,
    totalBudgetOutcome: number
  ): BudgetContributorSummary[] {
    return budgetContributors.map(
      (budgetContributor: BudgetContributor) => new BudgetContributorSummary(budgetContributor, totalBudgetIncome, totalBudgetOutcome)
    );
  }

  static calculateTotalBudgetOutcome(outcomes: SimpleTableRow[]): number {
    let total = 0;

    outcomes.map((income: SimpleTableRow) => income.value).forEach((value: number) => total += value)

    return total;
  }

  static calculateTotalContributorsIncome(contributors: BudgetContributor[]): number {
    let total = 0;

    contributors.forEach((contributor: BudgetContributor) => {
      const incomes: number[] = contributor.incomes.map(income => income.value);

      incomes.forEach((value: number) => total += value)
    })

    return total;
  }

  getBudgetSummary$(budgetId: ID): Observable<BudgetSummary> {
    return this.http.get<BudgetSummary>(`budget/summary/${budgetId}`);
  }
}
