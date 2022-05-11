export enum AllowanceFormKeys {
  ID = 'id',
  Name = 'name',
  Value = 'value'
}

export interface IAllowanceFormValue {
  [AllowanceFormKeys.ID]: string;
  [AllowanceFormKeys.Name]: string;
  [AllowanceFormKeys.Value]: number;
}
