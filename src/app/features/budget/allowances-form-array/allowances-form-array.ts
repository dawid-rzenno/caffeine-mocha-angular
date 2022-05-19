export enum AllowanceFormArrayElement {
  Name = 'name',
  Value = 'value'
}

export interface IAllowanceFormArrayElement {
  [AllowanceFormArrayElement.Name]: string;
  [AllowanceFormArrayElement.Value]: number;
}
