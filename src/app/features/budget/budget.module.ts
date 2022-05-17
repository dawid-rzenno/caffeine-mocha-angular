import {Injectable, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BudgetFormComponent} from "./budget-form/budget-form.component";
import {OutcomesFormComponent} from "./outcomes-form/outcomes-form.component";
import {ContributorsFormComponent} from "./contributors-form/contributors-form.component";
import {IncomesFormComponent} from "./incomes-form/incomes-form.component";
import {AllowancesFormComponent} from "./allowances-form/allowances-form.component";
import {DeductionsFormComponent} from "./deductions-form/deductions-form.component";
import {ReactiveFormsModule} from "@angular/forms";
import {BudgetComponent} from './budget.component';
import {BudgetListComponent} from './budget-list/budget-list.component';
import {ContributionListComponent} from './contribution-list/contribution-list.component';
import {ActivatedRouteSnapshot, Resolve, RouterModule, RouterStateSnapshot, Routes} from "@angular/router";
import {BudgetService} from "./budget.service";
import {HttpClientModule} from "@angular/common/http";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {Observable, of} from "rxjs";
import {IBudget} from "./budget";
import {Headers} from "../../models/headers.enum";
import {MatTableModule} from "@angular/material/table";
import { OutcomesListComponent } from './outcomes-list/outcomes-list.component';

@Injectable({providedIn: 'root'})
export class BudgetResolver implements Resolve<Observable<IBudget> | null > {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IBudget> | null {
    const id: string | null = route.paramMap.get('id')
    return id ? of({id}) : null;
  }
}

@Injectable({providedIn: 'root'})
export class BudgetsResolver implements Resolve<Observable<IBudget[]> | null > {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IBudget[]> | null {
    return of([]);
  }
}

const routes: Routes = [
  {
    path: '',
    component: BudgetComponent,
    children: [
      {
        path: 'new',
        component: BudgetFormComponent,
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
        path: 'edit/:id',
        component: BudgetFormComponent,
        resolve: {
          budget: BudgetResolver // navigate to "../new" if it can't be resolved
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
        path: 'list',
        component: BudgetListComponent,
        resolve: {
          budgets: BudgetsResolver
        },
        data: {
          header: Headers.ListBudgets
        }
      }
    ]
  }
];

@NgModule({
  declarations: [
    BudgetFormComponent,
    OutcomesFormComponent,
    ContributorsFormComponent,
    IncomesFormComponent,
    AllowancesFormComponent,
    DeductionsFormComponent,
    BudgetComponent,
    BudgetListComponent,
    ContributionListComponent,
    OutcomesListComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule
  ],
  exports: [
    RouterModule,
    BudgetFormComponent
  ],
  providers: [
    BudgetService
  ]
})
export class BudgetModule {
}
