import { SimpleTableRowControlKeys } from './simple-table-row-control-keys';

export interface SimpleTableRowControl {
  [SimpleTableRowControlKeys.ID]: string;
  [SimpleTableRowControlKeys.Name]: string;
  [SimpleTableRowControlKeys.Value]: number;
}
