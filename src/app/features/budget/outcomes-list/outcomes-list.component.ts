import {Component, Input} from '@angular/core';
import {IOutcomesFormValue, OutcomesFormKeys} from "../outcomes-form/outcomes-form";
import {IListButtonAction} from "../../../models/list-action.model";

@Component({
  selector: 'mocha-outcomes-list',
  templateUrl: './outcomes-list.component.html',
  styleUrls: ['./outcomes-list.component.scss']
})
export class OutcomesListComponent {
  private _outcomes: IOutcomesFormValue[] = [];

  @Input()
  public set outcomes(outcomes: IOutcomesFormValue[]) {
    this._outcomes = outcomes
    this.totalValue = this.calculateTotalValue()
  }
  public get outcomes(): IOutcomesFormValue[] {
    return this._outcomes;
  }

  @Input() public actions: IListButtonAction[] = []

  public totalValue = 0;

  private calculateTotalValue(): number {
    let total = 0;
    this.outcomes.forEach((outcome: IOutcomesFormValue) => total = total + outcome[OutcomesFormKeys.Value])
    return total;
  }

  public readonly DisplayedColumns = ['name', 'value', 'actions'];

}
