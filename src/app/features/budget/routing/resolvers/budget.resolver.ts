import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Budget} from "../../budget-form/common/budget";
import {BudgetService} from "../../budget.service";
import {PathParams} from "../../../../common/constants/path-params";

@Injectable()
export class BudgetResolver implements Resolve<Observable<Budget> | null> {
  constructor(private service: BudgetService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Budget> | null {
    const id: string | null = route.paramMap.get(PathParams.ID);
    return id ? this.service.get(id) : null;
  }
}
