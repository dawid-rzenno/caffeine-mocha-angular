import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LogInComponent} from './log-in/log-in.component';
import {LogOutComponent} from './log-out/log-out.component';
import {RouterModule, Routes} from "@angular/router";
import {SignUpComponent} from './sign-up/sign-up.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {AuthService} from "./auth.service";
import {AuthInterceptor} from "./auth.interceptor";
import {PathSegment} from "../../common/constants/path-segment.enum";

const DECLARATIONS = [
  LogInComponent,
  LogOutComponent,
  SignUpComponent
];

const IMPORTS = [
  // ANGULAR
  RouterModule,
  CommonModule,
  HttpClientModule,
  ReactiveFormsModule,
  // MATERIAL
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatProgressSpinnerModule
];

@NgModule({
  declarations: DECLARATIONS,
  imports: IMPORTS,
  providers: [
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ]
})
export class AuthModule {
  static readonly routes: Routes = [{
    path: PathSegment.Auth,
    children: [
      {
        path: PathSegment.LogIn,
        component: LogInComponent
      },
      {
        path: PathSegment.LogOut,
        component: LogOutComponent
      },
      {
        path: PathSegment.SignUp,
        component: SignUpComponent
      },
    ]
  }]
}
