import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {AUTH_DIRECT_ROUTE, AuthDirectRouteKey} from "../../common/constants/auth-direct-route.const";
import {SignInForm, SignInFormKey} from "./sign-in-form.type";

@Component({
  selector: 'mocha-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  readonly FormKey: typeof SignInFormKey = SignInFormKey
  readonly AuthDirectRoute = AUTH_DIRECT_ROUTE;
  readonly AuthDirectRouteKey = AuthDirectRouteKey;

  readonly formGroup: FormGroup<SignInForm> = this.fb.group<SignInForm>({
    [SignInFormKey.Email]: this.fb.control<string>('', Validators.required),
    [SignInFormKey.Password]: this.fb.control<string>('', Validators.required),
    [SignInFormKey.RememberMe]: this.fb.control<boolean>(false),
  })

  constructor(private authService: AuthService, private fb: FormBuilder) {
  }

  onSubmit(): void {
    this.authService.signIn$().subscribe();
  }
}
