import {BudgetDetailsFormKeys} from "../budget-details-form-group/budget-details-form-group";
import {Directive, EventEmitter, Input, Output} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Directive()
export abstract class InnerFormGroup {
  public abstract readonly Keys: {[k: string]: any};

  @Input() public formGroup!: FormGroup;

  @Output() public formSubmission: EventEmitter<null> = new EventEmitter<null>();

  public static attachControlsToFormGroup(formGroup: FormGroup): FormGroup {
    formGroup.removeControl(BudgetDetailsFormKeys.Name)
    formGroup.removeControl(BudgetDetailsFormKeys.Owner)

    formGroup.addControl(
      BudgetDetailsFormKeys.Name,
      new FormControl('', {validators: [Validators.required]})
    );

    formGroup.addControl(
      BudgetDetailsFormKeys.Owner,
      new FormControl('', {validators: [Validators.required]})
    );

    return formGroup;
  }
}
