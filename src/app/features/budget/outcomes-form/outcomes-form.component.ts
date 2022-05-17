import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ArrayFormControlChildAbstract} from "../abstracts/array-form-control-child.abstract";
import {IOutcomesFormValue, OutcomesFormKeys} from "./outcomes-form";
import {BudgetFormKeys} from "../budget-form/budget-form";
import {IListButtonAction} from "../../../models/list-action.model";

@Component({
  selector: 'mocha-outcomes-form',
  templateUrl: './outcomes-form.component.html',
  styleUrls: ['./outcomes-form.component.scss']
})
export class OutcomesFormComponent extends ArrayFormControlChildAbstract<IOutcomesFormValue> {
  @Input() public parentForm!: FormGroup;
  public readonly Keys = OutcomesFormKeys;
  public readonly NameInsideParentForm = BudgetFormKeys.Outcomes;
  public readonly OutcomesListButtonActions: IListButtonAction[] = [
    {
      label: 'Remove',
      type: 'button',
      color: 'warn',
      callback: (outcome: IOutcomesFormValue) => this.onRemove(outcome[OutcomesFormKeys.ID])
    }
  ]

  constructor(private fb: FormBuilder) {
    super();
    this.form = this.fb.group({
      [OutcomesFormKeys.ID]: 0,
      [OutcomesFormKeys.Name]: 'Testing',
      [OutcomesFormKeys.Value]: 100
    })
  }
}
