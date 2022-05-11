import {Component, Input} from '@angular/core';
import {ArrayFormControlChildAbstract} from "../../abstracts/array-form-control-child.abstract";
import {FormBuilder, FormGroup} from "@angular/forms";
import {IIncomeFormValue, IncomeFormKeys} from "./incomes-form";
import {ContributorFormKeys} from "../contributor-form";

@Component({
  selector: 'mocha-incomes-form',
  templateUrl: './incomes-form.component.html',
  styleUrls: ['./incomes-form.component.scss']
})
export class IncomesFormComponent extends ArrayFormControlChildAbstract<IIncomeFormValue> {
  @Input() public parentForm!: FormGroup;
  public readonly Keys = IncomeFormKeys;
  public readonly NameInsideParentForm = ContributorFormKeys.Incomes;

  public override afterAddCallback = () => this.totalValue = this.calculateTotalValue()
  public override afterRemoveCallback = () => this.totalValue = this.calculateTotalValue()

  public totalValue = 0;

  private calculateTotalValue(): number {
    let total = 0;
    this.array.forEach((outcome: IIncomeFormValue) => total = total + outcome[IncomeFormKeys.Value])
    return total;
  }

  constructor(private fb: FormBuilder) {
    super();
    this.form = this.fb.group({
      [IncomeFormKeys.ID]: 0,
      [IncomeFormKeys.Name]: 'Testing',
      [IncomeFormKeys.Value]: 100
    })
  }
}
