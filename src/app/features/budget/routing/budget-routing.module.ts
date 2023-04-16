import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {BudgetComponent} from "../budget.component";
import {PathSegment} from "../../../common/constants/path-segment.enum";
import {BudgetFormGroupComponent} from "../budget-form-group/budget-form-group.component";
import {BudgetHeader} from "../common/route-data-header.enum";
import {BudgetSummaryComponent} from "../budget-summary/budget-summary.component";
import {BudgetTableComponent} from "../budget-table/budget-table.component";
import {BudgetResolver} from "./resolvers/budget.resolver";
import {BudgetsResolver} from "./resolvers/budgets.resolver";
import {PathParam} from "../../../common/constants/path-param.enum";

export enum BudgetRouteDataKey {
  Budgets = 'Budgets',
  Budget = 'Budget',
  Header = 'Header',
}

export const BUDGET_ROUTES: Routes = [
  {
    path: '',
    component: BudgetComponent,
    children: [
      {
        path: PathSegment.Create,
        component: BudgetFormGroupComponent,
        resolve: {
          [BudgetRouteDataKey.Budget]: BudgetResolver
        },
        data: {
          [BudgetRouteDataKey.Header]: BudgetHeader.Create
        }
      },
      {
        path: `${PathSegment.Edit}/:${PathParam.ID}`,
        component: BudgetFormGroupComponent,
        resolve: {
          [BudgetRouteDataKey.Budget]: BudgetResolver // ToDo: navigate to "../new" if it can't be resolved
        },
        data: {
          [BudgetRouteDataKey.Header]: BudgetHeader.Edit
        }
      },
      {
        path: `${PathSegment.Inspect}/:${PathParam.ID}`,
        component: BudgetSummaryComponent,
        resolve: {
          [BudgetRouteDataKey.Budget]: BudgetResolver // ToDo: navigate to "../new" if it can't be resolved
        }
      },
      {
        path: PathSegment.All,
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
    BudgetsResolver
  ]
})
export class BudgetRoutingModule {
}
