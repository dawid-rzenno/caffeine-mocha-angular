import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IBudgetFormGroupRawValue} from "./budget-form-group/budget-form-group";

@Injectable()
export class BudgetService {

  constructor(private http: HttpClient) {
  }

  public create(budget: IBudgetFormGroupRawValue) {
    return this.http.post('http://localhost/jp2gmd', budget);
  }
}
