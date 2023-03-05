import {PathSegment} from "../../../common/constants/path-segment.enum";
import {DirectRoute} from "./direct-route.const";

export enum AuthDirectRouteKey {
  AuthSignIn = 'AuthSignIn',
  AuthSignOut = 'AuthSignOut',
  AuthSignUp = 'AuthSignUp',
}

export const AUTH_DIRECT_ROUTE: DirectRoute = {
  [AuthDirectRouteKey.AuthSignIn]: ['/', PathSegment.Auth, PathSegment.SignIn],
  [AuthDirectRouteKey.AuthSignOut]: ['/', PathSegment.Auth, PathSegment.SignOut],
  [AuthDirectRouteKey.AuthSignUp]: ['/', PathSegment.Auth, PathSegment.SignUp]
}
