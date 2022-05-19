import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ArrayFormControlChildAbstract} from "../abstracts/array-form-control-child.abstract";
import {AllowanceFormKeys, IAllowanceFormValue} from "./allowances-form";
import {ContributorFormKeys} from "../contributors-form/contributor-form";

@Component({
  selector: 'mocha-allowances-form',
  templateUrl: './allowances-form.component.html',
  styleUrls: ['./allowances-form.component.scss']
})
export class AllowancesFormComponent extends ArrayFormControlChildAbstract<IAllowanceFormValue> {
  @Input() public parentForm!: FormGroup;
  public readonly Keys = AllowanceFormKeys;
  public readonly NameInsideParentForm = ContributorFormKeys.Allowances;

  public override afterAddCallback = () => this.totalValue = this.calculateTotalValue()
  public override afterRemoveCallback = () => this.totalValue = this.calculateTotalValue()

  public totalValue = 0;

  private calculateTotalValue(): number {
    let total = 0;
    this.array.forEach((outcome: IAllowanceFormValue) => total = total + outcome[AllowanceFormKeys.Value])
    return total;
  }

  constructor(private fb: FormBuilder) {
    super();
    this.formGroup = this.fb.group({
      [AllowanceFormKeys.ID]: 0,
      [AllowanceFormKeys.Name]: 'Testing',
      [AllowanceFormKeys.Value]: 100
    })
  }
}
