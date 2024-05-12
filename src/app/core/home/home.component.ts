import {Component} from '@angular/core';
import {BudgetDirectRouteKeys} from "../../common/constants/budget-direct-route-keys";
import { budgetDirectRoutes } from "../../common/constants/budget-direct-routes";

@Component({
  selector: 'mocha-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  readonly BudgetDirectRoute = budgetDirectRoutes;
  readonly BudgetDirectRouteKey = BudgetDirectRouteKeys;
}
