import { PathSegment } from "../../../common/constants/path-segment.enum";

export enum DirectRouteKey {
  Home = 'Home'
}

export const DIRECT_ROUTE: Record<string, any> = {
  [DirectRouteKey.Home]: ['/', PathSegment.Home],
}
