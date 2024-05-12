import {Component, Input} from '@angular/core';
import {SimpleTableRow} from "./common/simple-table-row";
import {TableComponent} from "../../abstracts/table-component";

import { SimpleTableRowControlKeys } from "./common/simple-table-row-control-keys";

@Component({
  selector: 'mocha-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss']
})
export class SimpleTableComponent extends TableComponent<SimpleTableRow, typeof SimpleTableRowControlKeys, SimpleTableRowControlKeys> {
  public readonly ColumnKey = SimpleTableRowControlKeys;
  public readonly DisplayedColumnKeys = [
    this.ColumnKey.ID,
    this.ColumnKey.Name,
    this.ColumnKey.Value
  ];

  @Input() public override dataSource: SimpleTableRow[] = [];
}
