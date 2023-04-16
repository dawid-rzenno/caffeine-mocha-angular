import {AUTH_DIRECT_ROUTE, AuthDirectRouteKey} from "../../common/constants/auth-direct-route.const";
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
        routerLink: AUTH_DIRECT_ROUTE[AuthDirectRouteKey.AuthSignIn]
      },
      {
        label: 'Log Out',
        routerLink: AUTH_DIRECT_ROUTE[AuthDirectRouteKey.AuthSignOut]
      },
      {
        label: 'Sign Up',
        routerLink: AUTH_DIRECT_ROUTE[AuthDirectRouteKey.AuthSignUp]
      },
    ]
  },
];
