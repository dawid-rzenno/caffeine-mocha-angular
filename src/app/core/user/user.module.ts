import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LogInComponent} from './log-in/log-in.component';
import {LogOutComponent} from './log-out/log-out.component';
import {RouterModule, Routes} from "@angular/router";
import {UserComponent} from './user.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    children: [
      {
        path: 'log-in',
        component: LogInComponent
      },
      {
        path: 'log-out',
        component: LogOutComponent
      },
      {
        path: 'sign-up',
        component: SignUpComponent
      },
    ]
  },
]

@NgModule({
  declarations: [
    UserComponent,
    LogInComponent,
    LogOutComponent,
    SignUpComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    LogInComponent,
    LogOutComponent
  ]
})
export class UserModule {
}
