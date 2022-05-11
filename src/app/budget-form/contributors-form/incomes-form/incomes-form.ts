export enum IncomeFormKeys {
  ID = 'id',
  Name = 'name',
  Value = 'value'
}

export interface IIncomeFormValue {
  [IncomeFormKeys.ID]: string;
  [IncomeFormKeys.Name]: string;
  [IncomeFormKeys.Value]: number;
}
