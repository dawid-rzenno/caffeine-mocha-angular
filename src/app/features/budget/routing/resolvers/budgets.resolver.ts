import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {BudgetInterface} from "../../budget-form/common/budget.interface";
import {BudgetService} from "../../budget.service";

@Injectable()
export class BudgetsResolver implements Resolve<Observable<BudgetInterface[]> | null> {
  constructor(private service: BudgetService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<BudgetInterface[]> | null {
    return this.service.getAll();
  }
}
