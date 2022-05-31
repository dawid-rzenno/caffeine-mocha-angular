export enum IncomeFormArrayElementKeys {
  Name = 'name',
  Value = 'value'
}

export interface IIncomeFormArrayElement {
  [IncomeFormArrayElementKeys.Name]: string;
  [IncomeFormArrayElementKeys.Value]: number;
}
