import {FormControl} from "@angular/forms";

export enum SignUpFormKey {
  Email = 'email',
  Password = 'password',
  PasswordConfirmation = 'passwordConfirmation',
  TosAccepted = 'tosAccepted'
}

export type SignUpForm = {
  [SignUpFormKey.Email]: FormControl<string | null>,
  [SignUpFormKey.Password]: FormControl<string | null>,
  [SignUpFormKey.PasswordConfirmation]: FormControl<string | null>,
  [SignUpFormKey.TosAccepted]: FormControl<boolean | null>,
}


