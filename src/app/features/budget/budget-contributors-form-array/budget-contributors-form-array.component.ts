import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {AbstractControl, UntypedFormArray, UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {BudgetContributorControlKey} from "./common/budget-contributor-form-group-value.model";
import {MatAccordion, MatExpansionPanel} from "@angular/material/expansion";
import {NestedFormArrayAbstract} from "../common/nested-form-array.abstract";

@Component({
  selector: 'mocha-budget-contributors-form-array',
  templateUrl: './budget-contributors-form-array.component.html',
  styleUrls: ['./budget-contributors-form-array.component.scss']
})
export class BudgetContributorsFormArrayComponent extends NestedFormArrayAbstract implements OnInit {
  public readonly ControlKey = BudgetContributorControlKey;

  @ViewChildren(MatAccordion) accordions!: QueryList<MatAccordion>;

  protected get createFormGroup(): UntypedFormGroup {
    return new UntypedFormGroup({
      [BudgetContributorControlKey.ID]: new UntypedFormControl(''),
      [BudgetContributorControlKey.Name]: new UntypedFormControl('', {validators: [Validators.required]}),
      [BudgetContributorControlKey.Incomes]: new UntypedFormArray([]),
      [BudgetContributorControlKey.Allowances]: new UntypedFormArray([]),
      [BudgetContributorControlKey.Deductions]: new UntypedFormArray([]),
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
