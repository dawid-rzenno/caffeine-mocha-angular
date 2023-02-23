import {Component} from '@angular/core';
import {BUDGET_DIRECT_ROUTE, BudgetDirectRouteKey} from "../../common/constants/budget-direct-route-key.const";

@Component({
  selector: 'mocha-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  readonly BudgetDirectRoute = BUDGET_DIRECT_ROUTE;
  readonly BudgetDirectRouteKey = BudgetDirectRouteKey;
}
