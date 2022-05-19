import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ArrayFormControlChildAbstract} from "../abstracts/array-form-control-child.abstract";
import {ContributorFormKeys, IContributorFormValue} from "./contributor-form";
import {BudgetFormKeys} from "../budget-form/budget-form";

@Component({
  selector: 'mocha-contributors-form',
  templateUrl: './contributors-form.component.html',
  styleUrls: ['./contributors-form.component.scss']
})
export class ContributorsFormComponent extends ArrayFormControlChildAbstract<IContributorFormValue> {
  @Input() public parentForm!: FormGroup;
  public readonly Keys = ContributorFormKeys;
  public readonly NameInsideParentForm = BudgetFormKeys.Contributors;

  constructor(private fb: FormBuilder) {
    super();
    this.formGroup = this.fb.group({
      [ContributorFormKeys.ID]: 0,
      [ContributorFormKeys.Name]: 'Testing',
      [ContributorFormKeys.Incomes]: [],
      [ContributorFormKeys.Allowances]: [],
      [ContributorFormKeys.Deductions]: [],
    })
  }




}
