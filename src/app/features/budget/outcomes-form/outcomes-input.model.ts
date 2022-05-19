export enum OutcomesInputKeys {
  Name = 'name',
  Value = 'value'
}

export interface IOutcomesInputGroup {
  [OutcomesInputKeys.Name]: string;
  [OutcomesInputKeys.Value]: number;
}
