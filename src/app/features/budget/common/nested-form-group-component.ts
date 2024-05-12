import {Directive, EventEmitter, Input, Output} from "@angular/core";
import {UntypedFormGroup} from "@angular/forms";

@Directive()
export abstract class NestedFormGroupComponent {
  /** FormGroup control's keys. */
  public abstract readonly ControlKey: {[k: string]: any};

  @Input() public formGroup!: UntypedFormGroup;

  @Output() public formSubmission: EventEmitter<void> = new EventEmitter<void>();
}
