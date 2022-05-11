import {Component, Input} from '@angular/core';
import {ArrayFormControlChildAbstract} from "../../abstracts/array-form-control-child.abstract";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ContributorFormKeys} from "../contributor-form";
import {DeductionFormKeys, IDeductionFormValue} from "./deductions-form";

@Component({
  selector: 'mocha-deductions-form',
  templateUrl: './deductions-form.component.html',
  styleUrls: ['./deductions-form.component.scss']
})
export class DeductionsFormComponent extends ArrayFormControlChildAbstract<IDeductionFormValue> {
  @Input() public parentForm!: FormGroup;
  public readonly Keys = DeductionFormKeys;
  public readonly NameInsideParentForm = ContributorFormKeys.Deductions;

  public override afterAddCallback = () => this.totalValue = this.calculateTotalValue()
  public override afterRemoveCallback = () => this.totalValue = this.calculateTotalValue()

  public totalValue = 0;

  private calculateTotalValue(): number {
    let total = 0;
    this.array.forEach((outcome: IDeductionFormValue) => total = total + outcome[DeductionFormKeys.Value])
    return total;
  }

  constructor(private fb: FormBuilder) {
    super();
    this.form = this.fb.group({
      [DeductionFormKeys.ID]: 0,
      [DeductionFormKeys.Name]: 'Testing',
      [DeductionFormKeys.Value]: 100
    })
  }

}
