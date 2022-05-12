import {NgModule} from '@angular/core';
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
import {RouterModule, Routes} from "@angular/router";
import {BudgetService} from "./budget.service";
import {HttpClientModule} from "@angular/common/http";

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
        }
      },
      {
        path: 'edit/:id',
        component: BudgetFormComponent,
        resolve: {
          // budget
          // existing outcomes
          // existing contributors
          // existing allowances
          // existing deductions
        }
      },
      {
        path: 'list',
        component: BudgetListComponent,
        resolve: {
          // budgets
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
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
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
