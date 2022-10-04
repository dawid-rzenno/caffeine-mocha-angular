import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {BudgetContributorControlKey} from "./common/budget-contributor-control.interface";
import {MatAccordion, MatExpansionPanel} from "@angular/material/expansion";
import {NestedFormArrayAbstract} from "../common/nested-form-array.abstract";

@Component({
  selector: 'mocha-budget-contributors-control',
  templateUrl: './budget-contributors-control.component.html',
  styleUrls: ['./budget-contributors-control.component.scss']
})
export class BudgetContributorsControlComponent extends NestedFormArrayAbstract implements OnInit {
  public readonly ControlKey = BudgetContributorControlKey;

  @ViewChildren(MatAccordion) accordions!:  QueryList<MatAccordion>;

  protected get newFormGroup(): FormGroup {
    return new FormGroup({
      [BudgetContributorControlKey.ID]: new FormControl(''),
      [BudgetContributorControlKey.Name]: new FormControl('', {validators: [Validators.required]}),
      [BudgetContributorControlKey.Incomes]: new FormArray([]),
      [BudgetContributorControlKey.Allowances]: new FormArray([]),
      [BudgetContributorControlKey.Deductions]: new FormArray([]),
    })
  }

  override ngOnInit() {
    super.ngOnInit();
  }

  public onContributorNameInputFocus(panel: MatExpansionPanel, abstractControl: AbstractControl | null): void {
    const formControl = abstractControl as FormControl;
    if (!formControl.touched) {
      panel.open();
    }
  }

  public onSubmit(form: FormGroup, incomesPanel: MatExpansionPanel): void {
    if (form.invalid) {
      incomesPanel.open();
    } else {
      this.newElementInFormArray.emit();
    }
  }
}
