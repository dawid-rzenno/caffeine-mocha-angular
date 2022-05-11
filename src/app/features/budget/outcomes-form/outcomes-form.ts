export enum OutcomesFormKeys {
  ID = 'id',
  Name = 'name',
  Value = 'value'
}

export interface IOutcomesFormValue {
  [OutcomesFormKeys.ID]: string;
  [OutcomesFormKeys.Name]: string;
  [OutcomesFormKeys.Value]: number;
}
