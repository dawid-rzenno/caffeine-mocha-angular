import {Component, Input} from '@angular/core';
import {
  IListComponentAbstractDataSourceElement,
  ListComponentAbstract
} from "../../../abstracts/list-component.abstract";

@Component({
  selector: 'mocha-outcome-list',
  templateUrl: './outcome-list.component.html',
  styleUrls: ['./outcome-list.component.scss']
})
export class OutcomeListComponent extends ListComponentAbstract {
  @Input() public override dataSource: IListComponentAbstractDataSourceElement[] = [];
}
