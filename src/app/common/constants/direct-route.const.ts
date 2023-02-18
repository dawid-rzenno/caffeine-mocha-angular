import {PathSegment} from "./path-segment.enum";

export const DIRECT_ROUTE = {
  Home: ['/', PathSegment.Home],
}

export const BUDGET_DIRECT_ROUTE = {
  AllBudgets: ['/', PathSegment.Budget, PathSegment.All],
  CreateBudget: ['/', PathSegment.Budget, PathSegment.Create],
  InspectBudget: (id: string) => ['/', PathSegment.Budget, PathSegment.Inspect, id],
  EditBudget: (id: string) => ['/', PathSegment.Budget, PathSegment.Edit, id],
}

export const USER_DIRECT_ROUTE = {
  UserLogIn: ['/', PathSegment.User, PathSegment.LogIn],
  UserLogOut: ['/', PathSegment.User, PathSegment.LogOut],
  UserSignUp: ['/', PathSegment.User, PathSegment.SignUp]
}
