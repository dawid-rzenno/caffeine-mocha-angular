import {USER_DIRECT_ROUTE, UserDirectRouteKey} from "../../common/constants/user-direct-route.const";
import {HeaderItemInterface} from "./header-item.interface";
import {BUDGET_DIRECT_ROUTE, BudgetDirectRouteKey} from "../../../common/constants/budget-direct-route-key.const";

export const HEADER_ITEMS: HeaderItemInterface[] = [
  {
    label: 'Budgets',
    items: [
      {
        label: 'All',
        routerLink: BUDGET_DIRECT_ROUTE[BudgetDirectRouteKey.AllBudgets]
      },
      {
        label: 'Create',
        routerLink: BUDGET_DIRECT_ROUTE[BudgetDirectRouteKey.CreateBudget]
      },
    ]
  },
  {
    label: 'User',
    items: [
      {
        label: 'Log In',
        routerLink: USER_DIRECT_ROUTE[UserDirectRouteKey.UserLogIn]
      },
      {
        label: 'Log Out',
        routerLink: USER_DIRECT_ROUTE[UserDirectRouteKey.UserLogOut]
      },
      {
        label: 'Sign Up',
        routerLink: USER_DIRECT_ROUTE[UserDirectRouteKey.UserSignUp]
      },
    ]
  },
];
