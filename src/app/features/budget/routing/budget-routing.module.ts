import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {BudgetComponent} from "../budget.component";
import {PathSegments} from "../../../common/constants/path-segments";
import {BudgetFormComponent} from "../budget-form/budget-form.component";
import {BudgetHeaders} from "../common/budget-headers";
import {BudgetSummaryComponent} from "../budget-summary/budget-summary.component";
import {BudgetTableComponent} from "../budget-table/budget-table.component";
import {BudgetResolver} from "./resolvers/budget.resolver";
import {BudgetsResolver} from "./resolvers/budgets.resolver";
import {BudgetFormResolver} from "./resolvers/budget-form.resolver";
import {PathParams} from "../../../common/constants/path-params";
import { RoutedFormRouteDataKeys } from "../common/routed-form-route-data-keys";

export const BudgetRouteDataKey = {
  ...RoutedFormRouteDataKeys,
  Budgets: 'budgets',
  Budget: 'budget',
}

export const BUDGET_ROUTES: Routes = [
  {
    path: '',
    component: BudgetComponent,
    children: [
      {
        path: PathSegments.Create,
        component: BudgetFormComponent,
        resolve: {
          [BudgetRouteDataKey.FormGroup]: BudgetFormResolver
        },
        data: {
          [BudgetRouteDataKey.Header]: BudgetHeaders.Create
        }
      },
      {
        path: `${PathSegments.Edit}/:${PathParams.ID}`,
        component: BudgetFormComponent,
        resolve: {
          [BudgetRouteDataKey.FormGroup]: BudgetFormResolver // ToDo: navigate to "../new" if it can't be resolved
        },
        data: {
          [BudgetRouteDataKey.Header]: BudgetHeaders.Edit
        }
      },
      {
        path: `${PathSegments.Inspect}/:${PathParams.ID}`,
        component: BudgetSummaryComponent,
        resolve: {
          [BudgetRouteDataKey.Budget]: BudgetResolver // ToDo: navigate to "../new" if it can't be resolved
        }
      },
      {
        path: PathSegments.All,
        component: BudgetTableComponent,
        resolve: {
          [BudgetRouteDataKey.Budgets]: BudgetsResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(BUDGET_ROUTES)],
  exports: [RouterModule],
  providers: [
    BudgetResolver,
    BudgetsResolver,
    BudgetFormResolver,
  ]
})
export class BudgetRoutingModule {
}
