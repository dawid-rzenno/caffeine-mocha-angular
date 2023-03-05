import {FormControl} from "@angular/forms";

export enum SignInFormKey {
  Email = 'email',
  Password = 'password',
  RememberMe = 'rememberMe'
}

export type SignInForm = {
  [SignInFormKey.Email]: FormControl;
  [SignInFormKey.Password]: FormControl;
  [SignInFormKey.RememberMe]: FormControl;
}
