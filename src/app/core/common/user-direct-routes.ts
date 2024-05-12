import { PathSegments } from '../../common/constants/path-segments';
import { UserDirectRouteKeys } from './user-direct-route-keys';

export const userDirectRoutes: Record<string, any> = {
  [UserDirectRouteKeys.UserLogIn]: ['/', PathSegments.Auth, PathSegments.LogIn],
  [UserDirectRouteKeys.UserLogOut]: ['/', PathSegments.Auth, PathSegments.LogOut],
  [UserDirectRouteKeys.UserSignUp]: ['/', PathSegments.Auth, PathSegments.SignUp],
};
