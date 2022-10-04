export enum BudgetGeneralControlKey {
  Name = 'name',
  Owner = 'owner',
}

export interface BudgetGeneralControlInterface {
  [BudgetGeneralControlKey.Name]: string,
  [BudgetGeneralControlKey.Owner]: string,
}
