import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AppBarComponent} from './core/layout/app-bar/app-bar.component';
import {RouterModule, Routes} from "@angular/router";
import {NotFoundComponent} from './core/not-found/not-found.component';
import {HomeComponent} from './core/home/home.component';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {UserInterceptor} from "./core/user/user.interceptor";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {UserModule} from "./core/user/user.module";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'budget',
    loadChildren: () => import('./features/budget/budget.module').then(m => m.BudgetModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent,
    NotFoundComponent,
    HomeComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    UserModule
  ],
  exports: [RouterModule],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: UserInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
