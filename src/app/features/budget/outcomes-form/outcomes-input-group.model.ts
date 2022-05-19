export enum OutcomesInputGroupKeys {
  Name = 'name',
  Value = 'value'
}

export interface IOutcomesInputGroup {
  [OutcomesInputGroupKeys.Name]: string;
  [OutcomesInputGroupKeys.Value]: number;
}
