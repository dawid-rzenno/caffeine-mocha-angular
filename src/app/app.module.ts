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
import {UserModule} from "./core/user/user.module";
import {FontAwesomeConfigModule} from "./libraries/font-awesome-config.module";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'budgets',
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
    FontAwesomeConfigModule,
    UserModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports: [RouterModule],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: UserInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
