import { PathSegments } from '../../common/constants/path-segments';
import { DirectRouteKeys } from './direct-route-keys';

export const directRoutes: Record<string, any> = {
  [DirectRouteKeys.Home]: ['/', PathSegments.Home],
};
