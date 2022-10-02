export enum BudgetDetailsControlKey {
  Name = 'name',
  Owner = 'owner',
}

export interface BudgetDetailsControlInterface {
  [BudgetDetailsControlKey.Name]: string,
  [BudgetDetailsControlKey.Owner]: string,
}
