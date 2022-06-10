import {Injectable, NgModule} from '@angular/core';
import {BudgetFormGroupComponent} from "./budget-form-group/budget-form-group.component";
import {ContributorsFormArrayComponent} from "./contributors-form-array/contributors-form-array.component";
import {BudgetComponent} from './budget.component';
import {ActivatedRouteSnapshot, Resolve, RouterModule, RouterStateSnapshot, Routes} from "@angular/router";
import {BudgetService} from "./budget.service";
import {Observable} from "rxjs";
import {Headers} from "../../shared/models/headers.enum";
import {BudgetDetailsFormGroupComponent} from './budget-details-form-group/budget-details-form-group.component';
import {BudgetDetailsComponent} from './budget-details/budget-details.component';
import {BudgetListComponent} from './budget-list/budget-list.component';
import {ContributorTileComponent} from './contributor-tile/contributor-tile.component';
import {IBudget} from "./budget-form-group/budget-form-group";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatExpansionModule} from "@angular/material/expansion";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MatCardModule} from "@angular/material/card";
import {MatStepperModule} from "@angular/material/stepper";
import {SharedComponentsModule} from "../../shared/components/shared-components.module";

@Injectable()
export class BudgetResolver implements Resolve<Observable<IBudget> | null> {
  constructor(private service: BudgetService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IBudget> | null {
    const id: string | null = route.paramMap.get('id')
    return id ? this.service.get(id) : null;
  }
}

@Injectable()
export class BudgetsResolver implements Resolve<Observable<IBudget[]> | null> {
  constructor(private service: BudgetService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IBudget[]> | null {
    return this.service.getAll();
  }
}

const routes: Routes = [
  {
    path: '',
    component: BudgetComponent,
    children: [
      {
        path: 'create',
        component: BudgetFormGroupComponent,
        resolve: {
          // existing outcomes
          // existing contributors
          // existing allowances
          // existing deductions
        },
        data: {
          header: Headers.CreateBudget
        }
      },
      {
        path: 'view/:id',
        component: BudgetDetailsComponent,
        resolve: {
          budget: BudgetResolver // ToDo: navigate to "../new" if it can't be resolved
        },
        data: {
          header: Headers.BudgetDetails
        }
      },
      {
        path: 'edit/:id',
        component: BudgetFormGroupComponent,
        resolve: {
          budget: BudgetResolver // ToDo: navigate to "../new" if it can't be resolved
          // existing outcomes
          // existing contributors
          // existing allowances
          // existing deductions
        },
        data: {
          header: Headers.EditBudget
        }
      },
      {
        path: 'all',
        component: BudgetListComponent,
        resolve: {
          budgets: BudgetsResolver
        },
        data: {
          header: Headers.AllBudgets
        }
      }
    ]
  }
];

const MATERIAL_IMPORTS = [
  MatCardModule,
  MatStepperModule,
  MatInputModule,
  MatButtonModule,
  MatExpansionModule,
];

@NgModule({
  declarations: [
    BudgetComponent,
    BudgetFormGroupComponent,
    BudgetDetailsFormGroupComponent,
    ContributorsFormArrayComponent,
    BudgetDetailsComponent,
    BudgetListComponent,
    ContributorTileComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedComponentsModule,
    FontAwesomeModule,
    ...MATERIAL_IMPORTS
  ],
  exports: [
    RouterModule
  ],
  providers: [
    BudgetService,
    BudgetResolver,
    BudgetsResolver
  ]
})
export class BudgetModule {}
