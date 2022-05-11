import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ArrayFormControlChildAbstract} from "../abstracts/array-form-control-child.abstract";
import {IOutcomesFormValue, OutcomesFormKeys} from "./outcomes-form";
import {BudgetFormKeys} from "../budget-form/budget-form";

@Component({
  selector: 'mocha-outcomes-form',
  templateUrl: './outcomes-form.component.html',
  styleUrls: ['./outcomes-form.component.scss']
})
export class OutcomesFormComponent extends ArrayFormControlChildAbstract<IOutcomesFormValue> {
  @Input() public parentForm!: FormGroup;
  public readonly Keys = OutcomesFormKeys;
  public readonly NameInsideParentForm = BudgetFormKeys.Outcomes;

  public override afterAddCallback = () => this.totalValue = this.calculateTotalValue()
  public override afterRemoveCallback = () => this.totalValue = this.calculateTotalValue()

  public totalValue = 0;

  private calculateTotalValue(): number {
    let total = 0;
    this.array.forEach((outcome: IOutcomesFormValue) => total = total + outcome[OutcomesFormKeys.Value])
    return total;
  }

  constructor(private fb: FormBuilder) {
    super();
    this.form = this.fb.group({
      [OutcomesFormKeys.ID]: 0,
      [OutcomesFormKeys.Name]: 'Testing',
      [OutcomesFormKeys.Value]: 100
    })
  }
}
