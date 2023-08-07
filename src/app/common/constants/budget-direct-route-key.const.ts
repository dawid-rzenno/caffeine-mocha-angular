import { PathSegment } from "./path-segment.enum";

export enum BudgetDirectRouteKey {
  AllBudgets = 'AllBudgets',
  CreateBudget = 'CreateBudget',
  InspectBudget = 'InspectBudget',
  EditBudget = 'EditBudget',
}

export const BUDGET_DIRECT_ROUTE: Record<string, any> = {
  [BudgetDirectRouteKey.AllBudgets]: ['/', PathSegment.Budget, PathSegment.All],
  [BudgetDirectRouteKey.CreateBudget]: ['/', PathSegment.Budget, PathSegment.Create],
  [BudgetDirectRouteKey.InspectBudget]: (id: string) => ['/', PathSegment.Budget, PathSegment.Inspect, id],
  [BudgetDirectRouteKey.EditBudget]: (id: string) => ['/', PathSegment.Budget, PathSegment.Edit, id],
}
