export interface IAppBarItem {
  label: string;
  routerLink?: string;
  items?: IAppBarItem[];
}

export const APP_BAR_ITEMS: IAppBarItem[] = [
  {
    label: 'Budgets',
    items: [
      {
        label: 'New',
        routerLink: '/budgets/new'
      },
      {
        label: 'All',
        routerLink: '/budgets/all'
      },
    ]
  },
  {
    label: 'User',
    items: [
      {
        label: 'Log In',
        routerLink: '/user/log-in'
      },
      {
        label: 'Log Out',
        routerLink: '/user/log-out'
      },
      {
        label: 'Sign Up',
        routerLink: '/user/sign-up'
      },
    ]
  },
];
