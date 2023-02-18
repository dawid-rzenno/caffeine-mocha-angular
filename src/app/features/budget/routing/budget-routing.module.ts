import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {RoutedFormRouteDataKey} from "../common/routed-form-component.abstract";
import {BudgetComponent} from "../budget.component";
import {AppPathElement, AppPathParams} from "../../../common/constants/app-path.enum";
import {BudgetFormComponent} from "../budget-form/budget-form.component";
import {RouteDataHeader} from "../../../common/constants/route-data-header.enum";
import {BudgetSummaryComponent} from "../budget-summary/budget-summary.component";
import {BudgetTableComponent} from "../budget-table/budget-table.component";
import {BudgetResolver} from "./resolvers/budget.resolver";
import {BudgetsResolver} from "./resolvers/budgets.resolver";
import {BudgetFormResolver} from "./resolvers/budget-form.resolver";

export const BudgetRouteDataKey = {
  ...RoutedFormRouteDataKey,
  Budgets: 'budgets',
  Budget: 'budget',
}

export const BUDGET_ROUTES: Routes = [
  {
    path: '',
    component: BudgetComponent,
    children: [
      {
        path: AppPathElement.Create,
        component: BudgetFormComponent,
        resolve: {
          [BudgetRouteDataKey.FormGroup]: BudgetFormResolver
        },
        data: {
          [BudgetRouteDataKey.Header]: RouteDataHeader.CreateBudget
        }
      },
      {
        path: `${AppPathElement.Edit}/:${AppPathParams.ID}`,
        component: BudgetFormComponent,
        resolve: {
          [BudgetRouteDataKey.FormGroup]: BudgetFormResolver // ToDo: navigate to "../new" if it can't be resolved
        },
        data: {
          [BudgetRouteDataKey.Header]: RouteDataHeader.EditBudget
        }
      },
      {
        path: `${AppPathElement.Inspect}/:${AppPathParams.ID}`,
        component: BudgetSummaryComponent,
        resolve: {
          [BudgetRouteDataKey.Budget]: BudgetResolver // ToDo: navigate to "../new" if it can't be resolved
        },
        data: {
          [BudgetRouteDataKey.Header]: RouteDataHeader.InspectBudget
        }
      },
      {
        path: AppPathElement.All,
        component: BudgetTableComponent,
        resolve: {
          [BudgetRouteDataKey.Budgets]: BudgetsResolver
        },
        data: {
          [BudgetRouteDataKey.Header]: RouteDataHeader.AllBudgets
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
