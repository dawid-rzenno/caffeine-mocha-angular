import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {UserService} from "../user.service";
import {USER_DIRECT_ROUTE} from "../../../common/constants/direct-route.const";

export enum LoginFormKey {
  Email = 'email',
  Password = 'password'
}

@Component({
  selector: 'mocha-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  public readonly Key: typeof LoginFormKey = LoginFormKey
  public readonly DirectPath = USER_DIRECT_ROUTE;

  public formGroup: UntypedFormGroup = new UntypedFormGroup({
    [LoginFormKey.Email]: new UntypedFormControl('', {validators: [Validators.required]}),
    [LoginFormKey.Password]: new UntypedFormControl('', {validators: [Validators.required]})
  })

  constructor(private userService: UserService) {
  }

  public onSubmit(): void {
    this.userService.logIn().subscribe()
  }

}
