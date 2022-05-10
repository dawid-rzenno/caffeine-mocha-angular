import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {BudgetFormKeys} from "../budget-form.component";
import {ArrayFormControlChildAbstract} from "../abstracts/array-form-control-child.abstract";

export enum OutcomeFormKeys {
  ID = 'id',
  Name = 'name',
  Value = 'value'
}

export interface IOutcomeForm {
  [OutcomeFormKeys.ID]: string;
  [OutcomeFormKeys.Name]: string;
  [OutcomeFormKeys.Value]: number;
}

@Component({
  selector: 'mocha-outcomes-form',
  templateUrl: './outcomes-form.component.html',
  styleUrls: ['./outcomes-form.component.scss']
})
export class OutcomesFormComponent extends ArrayFormControlChildAbstract<IOutcomeForm> {
  @Input() public parentForm!: FormGroup;
  public readonly Keys = OutcomeFormKeys;
  public readonly NameInsideParentForm = BudgetFormKeys.Outcomes;

  public override afterAddCallback = () => this.totalValue = this.calculateTotalValue()
  public override afterRemoveCallback = () => this.totalValue = this.calculateTotalValue()

  public totalValue = 0;

  private calculateTotalValue(): number {
    let total = 0;
    this.array.forEach((outcome: IOutcomeForm) => total = total + outcome[OutcomeFormKeys.Value])
    return total;
  }

  constructor(private fb: FormBuilder) {
    super();
    this.form = this.fb.group({
      [OutcomeFormKeys.Name]: 'Testing',
      [OutcomeFormKeys.Value]: 100
    })
  }
}
