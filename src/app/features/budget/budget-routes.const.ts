import {Routes} from "@angular/router";
import {BudgetComponent} from "./budget.component";
import {AppPathElement, AppPathParams} from "../../shared/constants/app-path.enum";
import {BudgetFormComponent} from "./budget-form/budget-form.component";
import {Header} from "../../shared/constants/header.enum";
import {BudgetInspectionComponent} from "./budget-inspection/budget-inspection.component";
import {BudgetFormResolver} from "./budget-form.resolver";
import {BudgetTableComponent} from "./budget-table/budget-table.component";
import {BudgetsResolver} from "./budgets.resolver";
import {RoutedFormRouteDataKey} from "./common/routed-form-component.abstract";

export const BudgetRouteDataKey = {
  ...RoutedFormRouteDataKey
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
          [BudgetRouteDataKey.Header]: Header.CreateBudget
        }
      },
      {
        path: `${AppPathElement.Inspect}/:${AppPathParams.ID}`,
        component: BudgetInspectionComponent,
        resolve: {
          [BudgetRouteDataKey.FormGroup]: BudgetFormResolver // ToDo: navigate to "../new" if it can't be resolved
        },
        data: {
          [BudgetRouteDataKey.Header]: Header.BudgetDetails
        }
      },
      {
        path: `${AppPathElement.Edit}/:${AppPathParams.ID}`,
        component: BudgetFormComponent,
        resolve: {
          [BudgetRouteDataKey.FormGroup]: BudgetFormResolver // ToDo: navigate to "../new" if it can't be resolved
        },
        data: {
          [BudgetRouteDataKey.Header]: Header.EditBudget
        }
      },
      {
        path: AppPathElement.All,
        component: BudgetTableComponent,
        resolve: {
          [BudgetRouteDataKey.FormGroup]: BudgetsResolver
        },
        data: {
          [BudgetRouteDataKey.Header]: Header.AllBudgets
        }
      }
    ]
  }
];
