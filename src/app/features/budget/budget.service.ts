import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Budget, BudgetFormGroupValue} from "./budget-form/common/budget-form-group.model";

@Injectable()
export class BudgetService {
  private readonly apiUrl = '/api/budget'

  constructor(private http: HttpClient) {
  }

  public getAll(apiUrl: string = this.apiUrl): Observable<Budget[]> {
    return BudgetService.handleError(
      this.http.get<Budget[]>(`${apiUrl}/all`, {observe: "response"})
    )
  }

  public get(id: string, apiUrl: string = this.apiUrl): Observable<Budget> {
    return BudgetService.handleError(
      this.http.get<Budget>(`${apiUrl}/view/${id}`, {observe: "response"})
    )
  }

  public create(budget: BudgetFormGroupValue, apiUrl: string = this.apiUrl): Observable<Budget> {
    return BudgetService.handleError(
      this.http.post<Budget>(`${apiUrl}/create`, budget, {observe: "response"})
    )
  }

  public edit(budget: Budget, apiUrl: string = this.apiUrl): Observable<Budget> {
    return BudgetService.handleError(
      this.http.patch<Budget>(`${apiUrl}/edit`, budget, {observe: "response"})
    )
  }

  public delete(id: string, apiUrl: string = this.apiUrl): Observable<null> {
    return BudgetService.handleError(
      this.http.delete<null>(`${apiUrl}/delete/${id}`, {observe: "response"})
    )
  }

  private static handleError<T>(response: Observable<HttpResponse<T>>): Observable<T> {
    return response.pipe(
      map((response: HttpResponse<T>) => response.body as T), // ToDo: error handling
    )
  }
}
