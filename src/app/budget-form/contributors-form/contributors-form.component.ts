import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {BudgetFormKeys} from "../budget-form.component";
import {ArrayFormControlChildAbstract} from "../abstracts/array-form-control-child.abstract";
import {OutcomeFormKeys} from "../outcomes-form/outcomes-form.component";

export enum ContributorFormKeys {
  ID = 'id',
  Name = 'name',
  Incomes = 'incomes',
  Allowances = 'allowances',
  Deductions = 'deductions'
}

export interface IContributorForm {
  [ContributorFormKeys.ID]: string;
  [ContributorFormKeys.Name]: string;
  [ContributorFormKeys.Incomes]: any[];
  [ContributorFormKeys.Allowances]: any[];
  [ContributorFormKeys.Deductions]: any[];
}

@Component({
  selector: 'mocha-contributors-form',
  templateUrl: './contributors-form.component.html',
  styleUrls: ['./contributors-form.component.scss']
})
export class ContributorsFormComponent extends ArrayFormControlChildAbstract<IContributorForm> {
  @Input() public parentForm!: FormGroup;
  public readonly Keys = ContributorFormKeys;
  public readonly NameInsideParentForm = BudgetFormKeys.Contributors;

  constructor(private fb: FormBuilder) {
    super();
    this.form = this.fb.group({
      [OutcomeFormKeys.ID]: 0,
      [ContributorFormKeys.Name]: 'Testing',
      [ContributorFormKeys.Incomes]: [],
      [ContributorFormKeys.Allowances]: [],
      [ContributorFormKeys.Deductions]: [],
    })
  }




}
