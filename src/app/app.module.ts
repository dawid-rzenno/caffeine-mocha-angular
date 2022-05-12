import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AppBarComponent} from './core/layout/app-bar/app-bar.component';
import {RouterModule, Routes} from "@angular/router";
import {NotFoundComponent} from './core/not-found/not-found.component';
import {LoginComponent} from "./core/user/login/login.component";
import {LogoutComponent} from "./core/user/logout/logout.component";
import {HomeComponent} from './core/home/home.component';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {UserInterceptor} from "./core/user/user.interceptor";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const routes: Routes = [
  {
    path: 'log-in',
    component: LoginComponent
  },
  {
    path: 'log-out',
    component: LogoutComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'budget',
    loadChildren: () => import('./features/budget/budget.module').then(m => m.BudgetModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./core/user/user.module').then(m => m.UserModule)
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
  ],
  exports: [RouterModule],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: UserInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
