import {Component, Input} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BudgetDetailsFormKeys} from "./budget-details-form-group";

@Component({
  selector: 'mocha-budget-details-form-group',
  templateUrl: './budget-details-form-group.component.html',
  styleUrls: ['./budget-details-form-group.component.scss'],
})
export class BudgetDetailsFormGroupComponent {
  public readonly Keys = BudgetDetailsFormKeys;

  @Input() public formGroup!: FormGroup;

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
