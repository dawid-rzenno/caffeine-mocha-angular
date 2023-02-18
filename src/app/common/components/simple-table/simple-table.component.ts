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
  public readonly ColumnKey = SimpleTableRowControlKey;
  public readonly DisplayedColumnKeys = [
    this.ColumnKey.ID,
    this.ColumnKey.Name,
    this.ColumnKey.Value
  ];

  @Input() public override dataSource: SimpleTableRowInterface[] = [];
}
