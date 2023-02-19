import {Component} from '@angular/core';
import {HEADER_LINKS} from "./header-items.const";
import {HeaderLinkInterface} from "./header-link.interface";
import {DIRECT_ROUTE, DirectRoute, DirectRouteKey} from "../../common/constants/direct-route.const";

@Component({
  selector: 'mocha-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public readonly Items: HeaderLinkInterface[] = HEADER_LINKS;
  public readonly DirectRoute: DirectRoute = DIRECT_ROUTE;
  public readonly DirectRouteKey = DirectRouteKey;
}
