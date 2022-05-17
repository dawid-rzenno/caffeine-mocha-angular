import {FormGroup} from "@angular/forms";
import { FormModes } from "./form-modes.enum";

export abstract class FormComponent {
  public readonly FormModes = FormModes
  public form!: FormGroup;
  public abstract Keys: any;
}
