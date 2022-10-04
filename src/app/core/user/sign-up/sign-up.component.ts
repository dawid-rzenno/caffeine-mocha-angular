import {Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {UserService} from "../user.service";
import {DirectAppPath} from "../../../common/constants/direct-app-path.const";

export enum SignUpFormKeys {
  Email = 'email',
  Password = 'password',
  PasswordConfirmation = 'passwordConfirmation'
}

export function controlValueMatches(controlA: FormControl): ValidatorFn {
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

  public formGroup: FormGroup = SignUpComponent.getFormGroup();

  constructor(private userService: UserService) {}

  private static getFormGroup(): FormGroup {
    const formGroup: FormGroup = new FormGroup({
      [SignUpFormKeys.Email]: new FormControl('', {validators: [Validators.required, Validators.email]}),
      [SignUpFormKeys.Password]: new FormControl('', {validators: [Validators.required]}),
      [SignUpFormKeys.PasswordConfirmation]: new FormControl('', {validators: [Validators.required]})
    });

    const passwordControl: FormControl = formGroup.get(SignUpFormKeys.Password) as FormControl;
    const passwordConfirmationControl: FormControl = formGroup.get(SignUpFormKeys.PasswordConfirmation) as FormControl;

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
