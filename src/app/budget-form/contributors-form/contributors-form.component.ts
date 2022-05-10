import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {BudgetFormKeys} from "../budget-form.component";
import {ArrayFormControlChildAbstract} from "../abstracts/array-form-control-child.abstract";

export enum ContributorFormKeys {
  ID = 'id',
  Name = 'name',
  Value = 'value'
}

export interface IContributorForm {
  [ContributorFormKeys.ID]: string;
  [ContributorFormKeys.Name]: string;
  [ContributorFormKeys.Value]: number;
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
      [ContributorFormKeys.Name]: 'Testing',
      [ContributorFormKeys.Value]: 100
    })
  }




}
