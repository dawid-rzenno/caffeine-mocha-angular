import {FormGroup} from "@angular/forms";
import {Directive} from "@angular/core";

@Directive()
export abstract class FormComponent {
  public form!: FormGroup;
  public abstract Keys: any;
}
