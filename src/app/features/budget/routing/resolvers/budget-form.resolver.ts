import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {UntypedFormGroup} from "@angular/forms";
import {BudgetFormService} from "../../budget-form-group/budget-form.service";
import {PathParam} from "../../../../common/constants/path-param.enum";

@Injectable()
export class BudgetFormResolver implements Resolve<Observable<UntypedFormGroup> | UntypedFormGroup> {
  constructor(private service: BudgetFormService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UntypedFormGroup> | UntypedFormGroup {
    const id: string | null = route.paramMap.get(PathParam.ID);
    return id ? this.service.getFormGroup$(id) : BudgetFormService.createFormGroup();
  }
}
