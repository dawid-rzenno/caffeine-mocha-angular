import {Directive} from "@angular/core";

@Directive()
export abstract class TableComponent<Element, Enum, Key> {
  public abstract readonly ColumnKey: Enum;
  public abstract readonly DisplayedColumnKeys: Key[];
  public dataSource: Element[] = [];
}
