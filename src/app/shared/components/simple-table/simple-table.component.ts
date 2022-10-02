import {Component, Input} from '@angular/core';
import {SimpleTableRowInterface} from "./common/simple-table-row.interface";
import {TableComponentAbstract} from "../../abstracts/table-component.abstract";
import {SimpleTableRowControlKey} from "./common/simple-table-row-control.interface";

@Component({
  selector: 'mocha-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss']
})
export class SimpleTableComponent extends TableComponentAbstract<SimpleTableRowInterface, typeof SimpleTableRowControlKey, SimpleTableRowControlKey> {
  public readonly ColumnKeys = SimpleTableRowControlKey;
  public readonly DisplayedColumnKeys = [
    this.ColumnKeys.ID,
    this.ColumnKeys.Name,
    this.ColumnKeys.Value
  ];

  @Input() public override dataSource: SimpleTableRowInterface[] = [];
}
