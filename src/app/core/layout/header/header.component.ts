import { Component } from '@angular/core';
import { headerLinks } from "./common/header-links";
import { HeaderLink } from "./common/header-link";
import { directRoutes } from "../../common/direct-routes";
import { DirectRouteKeys } from "../../common/direct-route-keys";

@Component({
  selector: 'mocha-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public readonly Items: HeaderLink[] = headerLinks;
  public readonly DirectRoute: Record<string, any> = directRoutes;
  public readonly DirectRouteKey = DirectRouteKeys;
}
