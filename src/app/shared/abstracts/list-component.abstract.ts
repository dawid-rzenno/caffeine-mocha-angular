import {Directive} from "@angular/core";

@Directive()
export abstract class ListComponentAbstract<Element, Enum, Key> {
  public abstract readonly DisplayedColumnKeys: Enum;
  public abstract readonly DisplayedColumns: Key[];
  public dataSource: Element[] = [];
}
