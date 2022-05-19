export enum OutcomesFormArrayElementKeys {
  Name = 'name',
  Value = 'value'
}

export interface IOutcomesFormArrayElement {
  [OutcomesFormArrayElementKeys.Name]: string;
  [OutcomesFormArrayElementKeys.Value]: number;
}
