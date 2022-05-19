import {Component, Input} from '@angular/core';
import {IOutcomesFormArrayElement, OutcomesFormArrayElementKeys} from "../outcomes-form-array/outcomes-form-array";
import {IListButtonAction} from "../../../models/list-action.model";

@Component({
  selector: 'mocha-outcomes-list',
  templateUrl: './outcomes-list.component.html',
  styleUrls: ['./outcomes-list.component.scss']
})
export class OutcomesListComponent {
  private _outcomes: IOutcomesFormArrayElement[] = [];

  @Input()
  public set outcomes(outcomes: IOutcomesFormArrayElement[]) {
    this._outcomes = outcomes
    this.totalValue = this.calculateTotalValue()
  }
  public get outcomes(): IOutcomesFormArrayElement[] {
    return this._outcomes;
  }

  @Input() public actions: IListButtonAction[] = []

  public totalValue = 0;

  private calculateTotalValue(): number {
    let total = 0;
    this.outcomes.forEach((outcome: IOutcomesFormArrayElement) => total = total + outcome[OutcomesFormArrayElementKeys.Value])
    return total;
  }

  public readonly DisplayedColumns = ['name', 'value', 'actions'];

}
