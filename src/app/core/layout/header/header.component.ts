import {Component} from '@angular/core';
import {HEADER_ITEMS} from "./header-items.const";
import {HeaderItemInterface} from "./header-item.interface";
import {DIRECT_ROUTE, DirectRoute, DirectRouteKey} from "../../common/constants/direct-route.const";

@Component({
  selector: 'mocha-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public readonly Items: HeaderItemInterface[] = HEADER_ITEMS;
  public readonly DirectRoute: DirectRoute = DIRECT_ROUTE;
  public readonly DirectRouteKey = DirectRouteKey;
}
