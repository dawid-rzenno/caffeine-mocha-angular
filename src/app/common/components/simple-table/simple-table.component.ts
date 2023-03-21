import {Component, Input} from '@angular/core';
import {TableComponentAbstract} from "../../abstracts/table-component.abstract";
import {SimpleTableRow, SimpleTableRowFormGroupKey} from "./common/simple-table-row-form-group.model";

@Component({
  selector: 'mocha-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss']
})
export class SimpleTableComponent extends TableComponentAbstract<SimpleTableRow, typeof SimpleTableRowFormGroupKey, SimpleTableRowFormGroupKey> {
  public readonly ColumnKey = SimpleTableRowFormGroupKey;
  public readonly DisplayedColumnKeys = [
    this.ColumnKey.ID,
    this.ColumnKey.Name,
    this.ColumnKey.Value
  ];

  @Input() public override dataSource: SimpleTableRow[] = [];
}
