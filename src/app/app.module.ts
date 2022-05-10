import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgetFormComponent } from './budget-form/budget-form.component';
import { ReactiveFormsModule} from "@angular/forms";
import { OutcomesFormComponent } from './budget-form/outcomes-form/outcomes-form.component';
import { ContributorsFormComponent } from './budget-form/contributors-form/contributors-form.component';
import { IncomesFormComponent } from './budget-form/incomes-form/incomes-form.component';
import { AllowancesFormComponent } from './budget-form/allowances-form/allowances-form.component';
import { DeductionsFormComponent } from './budget-form/deductions-form/deductions-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BudgetFormComponent,
    OutcomesFormComponent,
    ContributorsFormComponent,
    IncomesFormComponent,
    AllowancesFormComponent,
    DeductionsFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
