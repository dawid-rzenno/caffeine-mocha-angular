import {Component, Input} from '@angular/core';
import {IOutcomesInputGroup, OutcomesInputKeys} from "../outcomes-form/outcomes-input.model";
import {IListButtonAction} from "../../../models/list-action.model";

@Component({
  selector: 'mocha-outcomes-list',
  templateUrl: './outcomes-list.component.html',
  styleUrls: ['./outcomes-list.component.scss']
})
export class OutcomesListComponent {
  private _outcomes: IOutcomesInputGroup[] = [];

  @Input()
  public set outcomes(outcomes: IOutcomesInputGroup[]) {
    this._outcomes = outcomes
    this.totalValue = this.calculateTotalValue()
  }
  public get outcomes(): IOutcomesInputGroup[] {
    return this._outcomes;
  }

  @Input() public actions: IListButtonAction[] = []

  public totalValue = 0;

  private calculateTotalValue(): number {
    let total = 0;
    this.outcomes.forEach((outcome: IOutcomesInputGroup) => total = total + outcome[OutcomesInputKeys.Value])
    return total;
  }

  public readonly DisplayedColumns = ['name', 'value', 'actions'];

}
