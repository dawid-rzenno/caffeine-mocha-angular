import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {map, Observable, tap} from "rxjs";
import {IBudget} from "./budget-form-group/budget-form-group";

const apiUrl = '/api/budget';

@Injectable()
export class BudgetService {
  constructor(private http: HttpClient) {}

  public getAll(): Observable<IBudget[]> {
    return BudgetService.handleError(
      this.http.get<IBudget[]>(apiUrl + '/all', {observe: "response"})
    )
  }

  public get(id: string): Observable<IBudget> {
    return BudgetService.handleError(
      this.http.get<IBudget>(apiUrl + '/view/' + id, {observe: "response"})
    )
  }

  public create(budget: IBudget): Observable<IBudget> {
    return BudgetService.handleError(
      this.http.post<IBudget>(apiUrl + '/create', budget, {observe: "response"})
    )
  }

  public edit(budget: IBudget): Observable<IBudget> {
    return BudgetService.handleError(
      this.http.put<IBudget>(apiUrl + '/edit/' + budget.id, budget, {observe: "response"})
    )
  }

  public delete(id: string): Observable<null> {
    return BudgetService.handleError(
      this.http.delete<null>(apiUrl + '/delete/' + id, {observe: "response"})
    )
  }

  private static handleError<T>(response: Observable<HttpResponse<T>>): Observable<T> {
    return response.pipe(
      tap(r => console.log(r)),
      map((response: HttpResponse<T>) => response.body as T), // ToDo: error handling
      tap(r => console.log(r))
    )
  }
}
