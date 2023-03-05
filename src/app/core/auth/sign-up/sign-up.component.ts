import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {USER_DIRECT_ROUTE, UserDirectRouteKey} from "../../common/constants/user-direct-route.const";
import {controlValueMatches} from "./common/control-value-matches.function";
import {SignUpFormKey} from "./common/sign-up-form-key.enum";

@Component({
  selector: 'mocha-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  public readonly FormKey: typeof SignUpFormKey = SignUpFormKey;
  public readonly UserDirectRoute = USER_DIRECT_ROUTE;
  public readonly UserDirectRouteKey = UserDirectRouteKey;

  public formGroup: UntypedFormGroup = SignUpComponent.getFormGroup();

  constructor(private userService: AuthService) {
  }

  private static getFormGroup(): UntypedFormGroup {
    const formGroup: UntypedFormGroup = new UntypedFormGroup({
      [SignUpFormKey.Email]: new UntypedFormControl('', {validators: [Validators.required, Validators.email]}),
      [SignUpFormKey.Password]: new UntypedFormControl('', {validators: [Validators.required]}),
      [SignUpFormKey.PasswordConfirmation]: new UntypedFormControl('', {validators: [Validators.required]})
    });

    const passwordControl: UntypedFormControl = formGroup.get(SignUpFormKey.Password) as UntypedFormControl;
    const passwordConfirmationControl: UntypedFormControl = formGroup.get(SignUpFormKey.PasswordConfirmation) as UntypedFormControl;

    if (passwordControl && passwordConfirmationControl) {
      passwordConfirmationControl.addValidators(
        controlValueMatches(passwordControl)
      )
    }

    return formGroup;
  }

  public onSubmit(): void {
    this.userService.signUp().subscribe()
  }
}
