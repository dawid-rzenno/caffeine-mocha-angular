import {Directive} from "@angular/core";

@Directive()
export abstract class TableComponentAbstract<Element, Enum, Key> {
  public abstract readonly ColumnKeys: Enum;
  public abstract readonly DisplayedColumnKeys: Key[];
  public dataSource: Element[] = [];
}
