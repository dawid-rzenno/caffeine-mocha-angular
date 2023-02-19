import {PathSegment} from "../../../common/constants/path-segment.enum";

export type DirectRoute = { [k: string]: any };

export enum DirectRouteKey {
  Home = 'Home'
}

export const DIRECT_ROUTE: DirectRoute = {
  [DirectRouteKey.Home]: ['/', PathSegment.Home],
}
