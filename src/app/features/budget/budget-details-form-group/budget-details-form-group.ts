export enum BudgetDetailsFormKeys {
  Name = 'name',
  Owner = 'owner',
}

export interface IBudgetDetailsFormGroup {
  [BudgetDetailsFormKeys.Name]: string,
  [BudgetDetailsFormKeys.Owner]: string,
}

export interface IBudgetDetails {
  name: string;
  owner: string;
}
