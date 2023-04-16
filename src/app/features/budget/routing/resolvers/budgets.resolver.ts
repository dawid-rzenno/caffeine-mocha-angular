import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {BudgetService} from "../../budget.service";
import {Budget} from "../../budget-form-group/common/budget-form-group.model";

@Injectable()
export class BudgetsResolver implements Resolve<Observable<Budget[]> | null> {
  constructor(private service: BudgetService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Budget[]> | null {
    return this.service.getAll();
  }
}
