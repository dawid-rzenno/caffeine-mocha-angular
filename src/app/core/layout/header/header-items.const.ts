import {USER_DIRECT_ROUTE, UserDirectRouteKey} from "../../common/constants/user-direct-route.const";
import {HeaderLinkInterface} from "./header-link.interface";
import {BUDGET_DIRECT_ROUTE, BudgetDirectRouteKey} from "../../../common/constants/budget-direct-route-key.const";

export const HEADER_LINKS: HeaderLinkInterface[] = [
  {
    label: 'Budgets',
    links: [
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
    links: [
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
