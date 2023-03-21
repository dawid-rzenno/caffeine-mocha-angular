import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {BudgetService} from "../../budget.service";
import {PathParam} from "../../../../common/constants/path-param.enum";
import {Budget} from "../../budget-form/common/budget-form-group.model";

@Injectable()
export class BudgetResolver implements Resolve<Observable<Budget> | null> {
  constructor(private service: BudgetService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Budget> | null {
    const id: string | null = route.paramMap.get(PathParam.ID);
    return id ? this.service.get(id) : null;
  }
}
