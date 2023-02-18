import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LogInComponent} from './log-in/log-in.component';
import {LogOutComponent} from './log-out/log-out.component';
import {RouterModule, Routes} from "@angular/router";
import {SignUpComponent} from './sign-up/sign-up.component';
import {MatLegacyFormFieldModule as MatFormFieldModule} from "@angular/material/legacy-form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatLegacyInputModule as MatInputModule} from "@angular/material/legacy-input";
import {MatLegacyCardModule as MatCardModule} from "@angular/material/legacy-card";
import {MatLegacyButtonModule as MatButtonModule} from "@angular/material/legacy-button";
import {HttpClientModule} from "@angular/common/http";
import {MatLegacyProgressSpinnerModule as MatProgressSpinnerModule} from "@angular/material/legacy-progress-spinner";

const routes: Routes = [
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

@NgModule({
  declarations: [
    LogInComponent,
    LogOutComponent,
    SignUpComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    RouterModule
  ]
})
export class UserModule {}
