import {BUDGET_DIRECT_ROUTE, USER_DIRECT_ROUTE} from "../../../common/constants/direct-route.const";
import {AppBarItemInterface} from "./app-bar-item.interface";

export const APP_BAR_ITEMS: AppBarItemInterface[] = [
  {
    label: 'Budgets',
    items: [
      {
        label: 'All',
        routerLink: BUDGET_DIRECT_ROUTE.AllBudgets
      },
      {
        label: 'Create',
        routerLink: BUDGET_DIRECT_ROUTE.CreateBudget
      },
    ]
  },
  {
    label: 'User',
    items: [
      {
        label: 'Log In',
        routerLink: USER_DIRECT_ROUTE.UserLogIn
      },
      {
        label: 'Log Out',
        routerLink: USER_DIRECT_ROUTE.UserLogOut
      },
      {
        label: 'Sign Up',
        routerLink: USER_DIRECT_ROUTE.UserSignUp
      },
    ]
  },
];
