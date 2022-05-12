import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IBudgetFormValue} from "./budget-form/budget-form";

@Injectable()
export class BudgetService {

  constructor(private http: HttpClient) {
  }

  public create(budget: IBudgetFormValue) {
    return this.http.post('http://localhost/jp2gmd', budget);
  }
}
