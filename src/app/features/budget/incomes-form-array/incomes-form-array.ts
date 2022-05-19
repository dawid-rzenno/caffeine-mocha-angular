export enum IncomeFormArrayElementKeys {
  ID = 'id',
  Name = 'name',
  Value = 'value'
}

export interface IIncomeFormArrayElement {
  [IncomeFormArrayElementKeys.ID]: string;
  [IncomeFormArrayElementKeys.Name]: string;
  [IncomeFormArrayElementKeys.Value]: number;
}
