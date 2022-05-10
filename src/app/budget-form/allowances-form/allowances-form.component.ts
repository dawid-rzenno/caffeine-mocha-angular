import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ContributorFormKeys} from "../contributors-form/contributors-form.component";
import {ArrayFormControlChildAbstract} from "../abstracts/array-form-control-child.abstract";

export enum AllowanceFormKeys {
  ID = 'id',
  Name = 'name',
  Value = 'value'
}

export interface IAllowanceForm {
  [AllowanceFormKeys.ID]: string;
  [AllowanceFormKeys.Name]: string;
  [AllowanceFormKeys.Value]: number;
}

@Component({
  selector: 'mocha-allowances-form',
  templateUrl: './allowances-form.component.html',
  styleUrls: ['./allowances-form.component.scss']
})
export class AllowancesFormComponent extends ArrayFormControlChildAbstract<IAllowanceForm> {
  @Input() public parentForm!: FormGroup;
  public readonly Keys = AllowanceFormKeys;
  public readonly NameInsideParentForm = ContributorFormKeys.Allowances;

  public override afterAddCallback = () => this.totalValue = this.calculateTotalValue()
  public override afterRemoveCallback = () => this.totalValue = this.calculateTotalValue()

  public totalValue = 0;

  private calculateTotalValue(): number {
    let total = 0;
    this.array.forEach((outcome: IAllowanceForm) => total = total + outcome[AllowanceFormKeys.Value])
    return total;
  }

  constructor(private fb: FormBuilder) {
    super();
    this.form = this.fb.group({
      [AllowanceFormKeys.ID]: 0,
      [AllowanceFormKeys.Name]: 'Testing',
      [AllowanceFormKeys.Value]: 100
    })
  }
}
