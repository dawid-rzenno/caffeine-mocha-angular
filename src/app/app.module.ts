import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {CoreModule} from "./core/core.module";
import {PathSegment} from "./common/constants/path-segment.enum";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ReactiveFormsModule} from "@angular/forms";

const FEATURE_ROUTES: Routes = [
  {
    path: PathSegment.Budget,
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
    CoreModule,
    RouterModule.forRoot([
      ...FEATURE_ROUTES,
      ...CoreModule.routes
    ]),
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
