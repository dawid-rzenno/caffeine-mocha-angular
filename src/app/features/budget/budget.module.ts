import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BudgetFormComponent} from "./budget-form/budget-form.component";
import {OutcomesFormComponent} from "./outcomes-form/outcomes-form.component";
import {ContributorsFormComponent} from "./contributors-form/contributors-form.component";
import {IncomesFormComponent} from "./incomes-form/incomes-form.component";
import {AllowancesFormComponent} from "./allowances-form/allowances-form.component";
import {DeductionsFormComponent} from "./deductions-form/deductions-form.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    BudgetFormComponent,
    OutcomesFormComponent,
    ContributorsFormComponent,
    IncomesFormComponent,
    AllowancesFormComponent,
    DeductionsFormComponent,
  ],
  exports: [
    BudgetFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class BudgetModule { }
