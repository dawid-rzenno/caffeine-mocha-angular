export enum DeductionFormKeys {
  ID = 'id',
  Name = 'name',
  Value = 'value'
}

export interface IDeductionFormValue {
  [DeductionFormKeys.ID]: string;
  [DeductionFormKeys.Name]: string;
  [DeductionFormKeys.Value]: number;
}
