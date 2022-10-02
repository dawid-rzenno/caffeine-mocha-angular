import {EventEmitter, Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {FormGroup} from "@angular/forms";
import {BudgetFormService} from "./budget-form/budget-form.service";
import {AppPathParams} from "../../shared/constants/app-path.enum";

@Injectable()
export class BudgetFormResolver implements Resolve<Observable<FormGroup> | FormGroup> {
  constructor(private service: BudgetFormService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<FormGroup> | FormGroup {
    const id: string | null = route.paramMap.get(AppPathParams.ID);
    return id ? this.service.getFormGroup$(id, new EventEmitter()) : this.service.getFormGroup();
  }
}
