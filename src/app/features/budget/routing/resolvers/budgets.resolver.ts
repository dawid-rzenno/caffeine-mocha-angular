import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Budget} from "../../budget-form/common/budget";
import {BudgetService} from "../../budget.service";

@Injectable()
export class BudgetsResolver implements Resolve<Observable<Budget[]> | null> {
  constructor(private service: BudgetService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Budget[]> | null {
    return this.service.getAll();
  }
}
