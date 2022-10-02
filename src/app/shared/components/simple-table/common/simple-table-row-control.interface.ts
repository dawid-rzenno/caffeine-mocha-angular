export enum SimpleTableRowControlKey {
  ID = 'id',
  Name = 'name',
  Value = 'value'
}

export interface SimpleTableRowControlInterface {
  [SimpleTableRowControlKey.ID]: string;
  [SimpleTableRowControlKey.Name]: string;
  [SimpleTableRowControlKey.Value]: number;
}
