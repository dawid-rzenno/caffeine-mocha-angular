import {AppPathElement} from "./app-path.enum";

export const DirectAppPath = {
  Home: ['/', AppPathElement.Home],
  AllBudgets: ['/', AppPathElement.Budget, AppPathElement.All],
  CreateBudget: ['/', AppPathElement.Budget, AppPathElement.Create],
  InspectBudget: (id: string) => ['/', AppPathElement.Budget, AppPathElement.Inspect, id],
  EditBudget: (id: string) => ['/', AppPathElement.Budget, AppPathElement.Edit, id],
  UserLogIn: ['/', AppPathElement.User, AppPathElement.LogIn],
  UserLogOut: ['/', AppPathElement.User, AppPathElement.LogOut],
  UserSignUp: ['/', AppPathElement.User, AppPathElement.SignUp]
}
