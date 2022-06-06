import {Directive} from "@angular/core";

export enum ListComponentAbstractKeys {
  Name = 'name',
  Value = 'value'
}

export interface IListComponentAbstractDataSourceElement {
  [ListComponentAbstractKeys.Name]: string;
  [ListComponentAbstractKeys.Value]: number;
}

@Directive()
export abstract class ListComponentAbstract<
  Keys = typeof ListComponentAbstractKeys,
  DisplayedColumnKeys = ListComponentAbstractKeys,
  DataSourceElement = IListComponentAbstractDataSourceElement
  > {

  public readonly Keys: Keys;
  public readonly DisplayedColumns: DisplayedColumnKeys[];
  public dataSource: DataSourceElement[];

  constructor(keys: Keys, displayedColumns: DisplayedColumnKeys[], dataSource: DataSourceElement[]) {
    this.Keys = keys;
    this.DisplayedColumns = displayedColumns;
    this.dataSource = dataSource;
  }
}
