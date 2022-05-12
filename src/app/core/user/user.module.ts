import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {RouterModule, Routes} from "@angular/router";
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'log-in',
        component: LoginComponent
      },
      {
        path: 'log-out',
        component: LogoutComponent
      },
    ]
  }
]

@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent,
    UserComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    LoginComponent,
    LogoutComponent
  ]
})
export class UserModule {
}
