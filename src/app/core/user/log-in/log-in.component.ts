import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../user.service";

export enum LoginFormKeys {
  Email = 'email',
  Password = 'password'
}

@Component({
  selector: 'mocha-log-in', templateUrl: './log-in.component.html', styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  public readonly Keys: typeof LoginFormKeys = LoginFormKeys

  public formGroup: FormGroup = new FormGroup({
    [LoginFormKeys.Email]: new FormControl('', {validators: [Validators.required]}),
    [LoginFormKeys.Password]: new FormControl('', {validators: [Validators.required]})
  })

  constructor(private userService: UserService) {
  }

  public onSubmit(): void {
    this.userService.logIn().subscribe({
      next: value => {
      }
    })
  }

}
