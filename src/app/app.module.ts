import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ContributionListComponent} from './features/contribution-list/contribution-list.component';
import {AppBarComponent} from './layout/app-bar/app-bar.component';
import {BudgetModule} from "./features/budget/budget.module";

@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent,
    ContributionListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BudgetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
