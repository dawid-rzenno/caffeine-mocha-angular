import {userDirectRoutes} from "../../../common/user-direct-routes";
import {HeaderLink} from "./header-link";
import {BudgetDirectRouteKeys} from "../../../../common/constants/budget-direct-route-keys";
import { UserDirectRouteKeys } from "../../../common/user-direct-route-keys";
import { budgetDirectRoutes } from "../../../../common/constants/budget-direct-routes";

export const headerLinks: HeaderLink[] = [
  {
    label: 'Budgets',
    links: [
      {
        label: 'All',
        routerLink: budgetDirectRoutes[BudgetDirectRouteKeys.AllBudgets]
      },
      {
        label: 'Create',
        routerLink: budgetDirectRoutes[BudgetDirectRouteKeys.CreateBudget]
      },
    ]
  },
  {
    label: 'User',
    links: [
      {
        label: 'Log In',
        routerLink: userDirectRoutes[UserDirectRouteKeys.UserLogIn]
      },
      {
        label: 'Log Out',
        routerLink: userDirectRoutes[UserDirectRouteKeys.UserLogOut]
      },
      {
        label: 'Sign Up',
        routerLink: userDirectRoutes[UserDirectRouteKeys.UserSignUp]
      },
    ]
  },
];
