import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {AUTH_DIRECT_ROUTE, AuthDirectRouteKey} from "../../common/constants/auth-direct-route.const";
import {controlValueMatches} from "./common/control-value-matches.function";
import {SignUpForm, SignUpFormKey} from "./common/sign-up-form.type";

@Component({
  selector: 'mocha-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  public readonly FormKey: typeof SignUpFormKey = SignUpFormKey;
  public readonly AuthDirectRoute = AUTH_DIRECT_ROUTE;
  public readonly AuthDirectRouteKey = AuthDirectRouteKey;

  public formGroup: FormGroup<SignUpForm> = this.createFormGroup();

  constructor(private authService: AuthService, private fb: FormBuilder) {
  }

  public onSubmit(): void {
    this.authService.signUp$().subscribe()
  }

  private createFormGroup(): FormGroup<SignUpForm> {
    const passwordControl = this.fb.control<string>('', Validators.required)
    return this.fb.group({
      [SignUpFormKey.Email]: this.fb.control<string>('', {
        validators: [
          Validators.required,
          Validators.email
        ]
      }),
      [SignUpFormKey.Password]: passwordControl,
      [SignUpFormKey.PasswordConfirmation]: this.fb.control<string>('', {
        validators: [
          Validators.required,
          controlValueMatches(passwordControl)
        ]
      }),
      [SignUpFormKey.TosAccepted]: this.fb.control<boolean>(false, Validators.requiredTrue)
    });
  }
}
