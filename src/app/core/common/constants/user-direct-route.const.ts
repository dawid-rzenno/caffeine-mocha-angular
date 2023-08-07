import {PathSegment} from "../../../common/constants/path-segment.enum";

export enum UserDirectRouteKey {
  UserLogIn = 'UserLogIn',
  UserLogOut = 'UserLogOut',
  UserSignUp = 'UserSignUp',
}

export const USER_DIRECT_ROUTE: Record<string, any> = {
  [UserDirectRouteKey.UserLogIn]: ['/', PathSegment.Auth, PathSegment.LogIn],
  [UserDirectRouteKey.UserLogOut]: ['/', PathSegment.Auth, PathSegment.LogOut],
  [UserDirectRouteKey.UserSignUp]: ['/', PathSegment.Auth, PathSegment.SignUp]
}
