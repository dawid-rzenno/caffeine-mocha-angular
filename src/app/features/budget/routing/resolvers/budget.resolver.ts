import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {BudgetInterface} from "../../budget-form/common/budget.interface";
import {BudgetService} from "../../budget.service";
import {AppPathParams} from "../../../../common/constants/app-path.enum";

@Injectable()
export class BudgetResolver implements Resolve<Observable<BudgetInterface> | null> {
  constructor(private service: BudgetService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<BudgetInterface> | null {
    const id: string | null = route.paramMap.get(AppPathParams.ID);
    return id ? this.service.get(id) : null;
  }
}
