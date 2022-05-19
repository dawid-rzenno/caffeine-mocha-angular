import {FormGroup} from "@angular/forms";

export abstract class FormComponentAbstract {
  public formGroup!: FormGroup;
  public abstract Keys: any;
}
