import {FormGroup} from "@angular/forms";

export abstract class FormComponent {
  public form!: FormGroup;
  public abstract Keys: any;
}
