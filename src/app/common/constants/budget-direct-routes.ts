import { PathSegments } from './path-segments';
import { BudgetDirectRouteKeys } from './budget-direct-route-keys';

export const budgetDirectRoutes: Record<string, any> = {
  [BudgetDirectRouteKeys.AllBudgets]: [
    '/',
    PathSegments.Budget,
    PathSegments.All,
  ],
  [BudgetDirectRouteKeys.CreateBudget]: [
    '/',
    PathSegments.Budget,
    PathSegments.Create,
  ],
  [BudgetDirectRouteKeys.InspectBudget]: (id: string) => [
    '/',
    PathSegments.Budget,
    PathSegments.Inspect,
    id,
  ],
  [BudgetDirectRouteKeys.EditBudget]: (id: string) => [
    '/',
    PathSegments.Budget,
    PathSegments.Edit,
    id,
  ],
};
