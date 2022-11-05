import {Injectable, NgModule} from '@angular/core';
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
import {UntypedFormGroup} from "@angular/forms";
import {BudgetFormService} from "./budget-form/budget-form.service";

@Injectable()
export class BudgetResolver implements Resolve<Observable<BudgetInterface> | null> {
  constructor(private service: BudgetService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<BudgetInterface> | null {
    const id: string | null = route.paramMap.get(AppPathParams.ID);
    return id ? this.service.get(id) : null;
  }
}

@Injectable()
export class BudgetsResolver implements Resolve<Observable<BudgetInterface[]> | null> {
  constructor(private service: BudgetService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<BudgetInterface[]> | null {
    return this.service.getAll();
  }
}

@Injectable()
export class BudgetFormResolver implements Resolve<Observable<UntypedFormGroup> | UntypedFormGroup> {
  constructor(private service: BudgetFormService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UntypedFormGroup> | UntypedFormGroup {
    const id: string | null = route.paramMap.get(AppPathParams.ID);
    return id ? this.service.getFormGroup$(id) : this.service.getFormGroup();
  }
}

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
export class BudgetRoutingModule { }
