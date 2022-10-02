import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {UserInterceptor} from "./core/user/user.interceptor";
import {CoreModule, ERROR_ROUTES, CORE_ROUTES} from "./core/core.module";
import {AppPathElement} from "./shared/constants/app-path.enum";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ReactiveFormsModule} from "@angular/forms";

const FEATURE_ROUTES: Routes = [
  {
    path: AppPathElement.Budget,
    loadChildren: () => import('./features/budget/budget.module').then(m => m.BudgetModule)
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      ...CORE_ROUTES,
      ...FEATURE_ROUTES,
      ...ERROR_ROUTES
    ]),
    CoreModule,
  ],
  exports: [RouterModule],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: UserInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
