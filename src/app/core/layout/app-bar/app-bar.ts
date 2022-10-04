import {DirectAppPath} from "../../../common/constants/direct-app-path.const";

export interface IAppBarItem {
  label: string;
  routerLink?: string[];
  items?: IAppBarItem[];
}

export const APP_BAR_ITEMS: IAppBarItem[] = [
  {
    label: 'Budgets',
    items: [
      {
        label: 'All',
        routerLink: DirectAppPath.AllBudgets
      },
      {
        label: 'Create',
        routerLink: DirectAppPath.CreateBudget
      },
    ]
  },
  {
    label: 'User',
    items: [
      {
        label: 'Log In',
        routerLink: DirectAppPath.UserLogIn
      },
      {
        label: 'Log Out',
        routerLink: DirectAppPath.UserLogOut
      },
      {
        label: 'Sign Up',
        routerLink: DirectAppPath.UserSignUp
      },
    ]
  },
];
