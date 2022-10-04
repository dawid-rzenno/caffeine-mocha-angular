import {EventEmitter, Injectable, NgModule} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterModule, RouterStateSnapshot, Routes} from "@angular/router";
import {Observable} from "rxjs";
import {BudgetInterface} from "./budget-form/common/budget.interface";
import {BudgetService} from "./budget.service";
import {RoutedFormRouteDataKey} from "./common/routed-form-component.abstract";
import {BudgetComponent} from "./budget.component";
import {AppPathElement, AppPathParams} from "../../common/constants/app-path.enum";
import {BudgetFormComponent} from "./budget-form/budget-form.component";
import {RouteDataHeader} from "../../common/constants/route-data-header.enum";
import {BudgetSummaryComponent} from "./budget-summary/budget-summary.component";
import {BudgetTableComponent} from "./budget-table/budget-table.component";
import {FormGroup} from "@angular/forms";
import {BudgetFormService} from "./budget-form/budget-form.service";

@Injectable()
export class BudgetsResolver implements Resolve<Observable<BudgetInterface[]> | null> {
  constructor(private service: BudgetService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<BudgetInterface[]> | null {
    return this.service.getAll();
  }
}

export const BudgetRouteDataKey = {
  ...RoutedFormRouteDataKey,
  Budgets: 'budgets',
}

@Injectable()
export class BudgetFormResolver implements Resolve<Observable<FormGroup> | FormGroup> {
  constructor(private service: BudgetFormService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<FormGroup> | FormGroup {
    const id: string | null = route.paramMap.get(AppPathParams.ID);
    return id ? this.service.getFormGroup$(id, new EventEmitter()) : this.service.getFormGroup();
  }
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
        path: `${AppPathElement.Inspect}/:${AppPathParams.ID}`,
        component: BudgetSummaryComponent,
        resolve: {
          [BudgetRouteDataKey.FormGroup]: BudgetFormResolver // ToDo: navigate to "../new" if it can't be resolved
        },
        data: {
          [BudgetRouteDataKey.Header]: RouteDataHeader.BudgetDetails
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
  exports: [RouterModule]
})
export class BudgetRoutingModule { }
