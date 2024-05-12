import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {AbstractControl, UntypedFormArray, UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {MatAccordion, MatExpansionPanel} from "@angular/material/expansion";
import {NestedFormArrayComponent} from "../common/nested-form-array-component";
import { BudgetContributorControlKeys } from "./common/budget-contributor-control-keys";

@Component({
  selector: 'mocha-budget-contributors-control',
  templateUrl: './budget-contributors-control.component.html',
  styleUrls: ['./budget-contributors-control.component.scss']
})
export class BudgetContributorsControlComponent extends NestedFormArrayComponent implements OnInit {
  public readonly ControlKey = BudgetContributorControlKeys;

  @ViewChildren(MatAccordion) accordions!: QueryList<MatAccordion>;

  protected get newFormGroup(): UntypedFormGroup {
    return new UntypedFormGroup({
      [BudgetContributorControlKeys.ID]: new UntypedFormControl(''),
      [BudgetContributorControlKeys.Name]: new UntypedFormControl('', {validators: [Validators.required]}),
      [BudgetContributorControlKeys.Incomes]: new UntypedFormArray([]),
      [BudgetContributorControlKeys.Allowances]: new UntypedFormArray([]),
      [BudgetContributorControlKeys.Deductions]: new UntypedFormArray([]),
    })
  }

  override ngOnInit() {
    super.ngOnInit();
  }

  public onContributorNameInputFocus(panel: MatExpansionPanel, abstractControl: AbstractControl | null): void {
    const formControl = abstractControl as UntypedFormControl;
    if (!formControl.touched) {
      panel.open();
    }
  }

  public onSubmit(form: UntypedFormGroup, incomesPanel: MatExpansionPanel): void {
    if (form.invalid) {
      incomesPanel.open();
    } else {
      this.newElementInFormArray.emit();
    }
  }
}
