import {Component} from '@angular/core';
import {
  AbstractControl,
  UntypedFormControl,
  UntypedFormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {UserService} from "../user.service";
import {DirectAppPath} from "../../../common/constants/direct-app-path.const";

export enum SignUpFormKeys {
  Email = 'email',
  Password = 'password',
  PasswordConfirmation = 'passwordConfirmation'
}

export function controlValueMatches(controlA: UntypedFormControl): ValidatorFn {
  return (controlB: AbstractControl): ValidationErrors | null => {
    const valueA = JSON.stringify(controlA.value)
    const valueB = JSON.stringify(controlB.value)
    return valueA === valueB ? null : {valuesDifferent: true};
  }
}

@Component({
  selector: 'mocha-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  public readonly Keys: typeof SignUpFormKeys = SignUpFormKeys;
  public readonly DirectPaths = DirectAppPath;

  public formGroup: UntypedFormGroup = SignUpComponent.getFormGroup();

  constructor(private userService: UserService) {
  }

  private static getFormGroup(): UntypedFormGroup {
    const formGroup: UntypedFormGroup = new UntypedFormGroup({
      [SignUpFormKeys.Email]: new UntypedFormControl('', {validators: [Validators.required, Validators.email]}),
      [SignUpFormKeys.Password]: new UntypedFormControl('', {validators: [Validators.required]}),
      [SignUpFormKeys.PasswordConfirmation]: new UntypedFormControl('', {validators: [Validators.required]})
    });

    const passwordControl: UntypedFormControl = formGroup.get(SignUpFormKeys.Password) as UntypedFormControl;
    const passwordConfirmationControl: UntypedFormControl = formGroup.get(SignUpFormKeys.PasswordConfirmation) as UntypedFormControl;

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
