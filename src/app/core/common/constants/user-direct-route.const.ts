import {PathSegment} from "../../../common/constants/path-segment.enum";
import {DirectRoute} from "./direct-route.const";

export enum UserDirectRouteKey {
  UserLogIn = 'UserLogIn',
  UserLogOut = 'UserLogOut',
  UserSignUp = 'UserSignUp',
}

export const USER_DIRECT_ROUTE: DirectRoute = {
  [UserDirectRouteKey.UserLogIn]: ['/', PathSegment.Auth, PathSegment.LogIn],
  [UserDirectRouteKey.UserLogOut]: ['/', PathSegment.Auth, PathSegment.LogOut],
  [UserDirectRouteKey.UserSignUp]: ['/', PathSegment.Auth, PathSegment.SignUp]
}
