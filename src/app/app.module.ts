import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgetFormComponent } from './budget-form/budget-form.component';
import { ReactiveFormsModule} from "@angular/forms";
import { OutcomesInputComponent } from './budget-form/outcomes-input/outcomes-input.component';

@NgModule({
  declarations: [
    AppComponent,
    BudgetFormComponent,
    OutcomesInputComponent,
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
