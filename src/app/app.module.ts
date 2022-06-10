import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {UserInterceptor} from "./core/user/user.interceptor";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FontAwesomeIconLibraryModule} from "./libraries/font-awesome-icon-library.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {CoreModule} from "./core/core.module";

const ROUTES: Routes = [
  {
    path: 'budgets',
    loadChildren: () => import('./features/budget/budget.module').then(m => m.BudgetModule)
  }
];

const FONTAWESOME_IMPORTS = [
  FontAwesomeModule,
  FontAwesomeIconLibraryModule,
]

@NgModule({
  declarations: [AppComponent],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(ROUTES),
        ReactiveFormsModule,
        HttpClientModule,
        CoreModule,
        ...FONTAWESOME_IMPORTS
    ],
  exports: [RouterModule],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: UserInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
