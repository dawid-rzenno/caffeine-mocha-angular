import {Injectable, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BudgetFormGroupComponent} from "./budget-form-group/budget-form-group.component";
import {OutcomesFormArrayComponent} from "./outcomes-form-array/outcomes-form-array.component";
import {ContributorsFormArrayComponent} from "./contributors-form-array/contributors-form-array.component";
import {IncomesFormArrayComponent} from "./incomes-form-array/incomes-form-array.component";
import {AllowancesFormArrayComponent} from "./allowances-form-array/allowances-form-array.component";
import {DeductionsFormArrayComponent} from "./deductions-form-array/deductions-form-array.component";
import {ReactiveFormsModule} from "@angular/forms";
import {BudgetComponent} from './budget.component';
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
import {MatStepperModule} from "@angular/material/stepper";
import {MatCardModule} from "@angular/material/card";
import {BudgetDetailsFormGroupComponent} from './budget-details-form-group/budget-details-form-group.component';
import {MatExpansionModule} from "@angular/material/expansion";

@Injectable({providedIn: 'root'})
export class BudgetResolver implements Resolve<Observable<IBudget> | null> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IBudget> | null {
    const id: string | null = route.paramMap.get('id')
    return id ? of({id}) : null;
  }
}

@Injectable({providedIn: 'root'})
export class BudgetsResolver implements Resolve<Observable<IBudget[]> | null> {
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
        path: 'edit/:id',
        component: BudgetFormGroupComponent,
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
      }
    ]
  }
];

@NgModule({
  declarations: [
    BudgetComponent,
    BudgetFormGroupComponent,
    BudgetDetailsFormGroupComponent,
    OutcomesFormArrayComponent,
    ContributorsFormArrayComponent,
    IncomesFormArrayComponent,
    AllowancesFormArrayComponent,
    DeductionsFormArrayComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatStepperModule,
    MatCardModule,
    MatExpansionModule
  ],
  exports: [
    RouterModule,
    BudgetFormGroupComponent
  ],
  providers: [
    BudgetService
  ]
})
export class BudgetModule {
}
