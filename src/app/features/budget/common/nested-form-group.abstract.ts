import {Directive, EventEmitter, Input, Output} from "@angular/core";
import {FormGroup} from "@angular/forms";

@Directive()
export abstract class NestedFormGroupAbstract {
  /** FormGroup control's keys. */
  public abstract readonly ControlKey: {[k: string]: any};

  @Input() public formGroup!: FormGroup;

  @Output() public formSubmission: EventEmitter<void> = new EventEmitter<void>();
}
