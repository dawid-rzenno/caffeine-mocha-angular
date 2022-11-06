import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {UserService} from "../user.service";
import {DirectAppPath} from "../../../common/constants/direct-app-path.const";

export enum LoginFormKeys {
  Email = 'email',
  Password = 'password'
}

@Component({
  selector: 'mocha-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  public readonly Keys: typeof LoginFormKeys = LoginFormKeys
  public readonly DirectPaths = DirectAppPath;

  public formGroup: UntypedFormGroup = new UntypedFormGroup({
    [LoginFormKeys.Email]: new UntypedFormControl('', {validators: [Validators.required]}),
    [LoginFormKeys.Password]: new UntypedFormControl('', {validators: [Validators.required]})
  })

  constructor(private userService: UserService) {
  }

  public onSubmit(): void {
    this.userService.logIn().subscribe()
  }

}
