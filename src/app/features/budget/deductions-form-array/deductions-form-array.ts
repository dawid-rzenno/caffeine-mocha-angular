export enum DeductionFormArrayElementKeys {
  ID = 'id',
  Name = 'name',
  Value = 'value'
}

export interface IDeductionFormArrayElement {
  [DeductionFormArrayElementKeys.ID]: string;
  [DeductionFormArrayElementKeys.Name]: string;
  [DeductionFormArrayElementKeys.Value]: number;
}
