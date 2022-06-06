import {Component, Input} from '@angular/core';
import {IOutcomesFormArrayElement, OutcomesFormArrayElementKeys} from "../outcomes-form-array/outcomes-form-array";

@Component({
  selector: 'mocha-outcome-list',
  templateUrl: './outcome-list.component.html',
  styleUrls: ['./outcome-list.component.scss']
})
export class OutcomeListComponent {
  public readonly OutcomesFormArrayElementKeys = OutcomesFormArrayElementKeys
  public readonly DisplayedColumns: string[] = [OutcomesFormArrayElementKeys.Name, OutcomesFormArrayElementKeys.Value];

  @Input() public outcomes: IOutcomesFormArrayElement[] = [];
}
