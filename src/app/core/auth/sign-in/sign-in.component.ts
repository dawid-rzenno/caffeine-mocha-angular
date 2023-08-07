import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService, SignInBody } from "../auth.service";
import { USER_DIRECT_ROUTE, UserDirectRouteKey } from "../../common/constants/user-direct-route.const";

export type SignInForm = {
  email: FormControl<string>;
  password: FormControl<string>;
  rememberMe: FormControl<boolean>;
}

@Component({
  selector: 'mocha-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  readonly UserDirectRoute: Record<string, any> = USER_DIRECT_ROUTE;
  readonly UserDirectRouteKey = UserDirectRouteKey;

  readonly formGroup: FormGroup<SignInForm> = new FormGroup<SignInForm>({
    email: new FormControl<string>('', { validators: [Validators.required], nonNullable: true }),
    password: new FormControl<string>('', { validators: [Validators.required], nonNullable: true }),
    rememberMe: new FormControl<boolean>(false, { validators: [Validators.required], nonNullable: true })
  });

  constructor(private authService: AuthService) {
  }

  signIn(): void {
    this.authService.signIn(
      // Button that calls this method is disabled until sign-in form is valid so additional validation is not needed
      this.formGroup.value as SignInBody
    ).subscribe();
  }

}
