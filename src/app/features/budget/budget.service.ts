import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {map, Observable, tap} from "rxjs";
import {BudgetInterface} from "./budget-form/common/budget.interface";

const apiUrl = '/api/budget';

@Injectable()
export class BudgetService {
  constructor(private http: HttpClient) {}

  public getAll(): Observable<BudgetInterface[]> {
    return BudgetService.handleError(
      this.http.get<BudgetInterface[]>(apiUrl + '/all', {observe: "response"})
    )
  }

  public get(id: string): Observable<BudgetInterface> {
    return BudgetService.handleError(
      this.http.get<BudgetInterface>(apiUrl + '/view/' + id, {observe: "response"})
    )
  }

  public create(budget: BudgetInterface): Observable<BudgetInterface> {
    return BudgetService.handleError(
      this.http.post<BudgetInterface>(apiUrl + '/create', budget, {observe: "response"})
    )
  }

  public edit(budget: BudgetInterface): Observable<BudgetInterface> {
    return BudgetService.handleError(
      this.http.put<BudgetInterface>(apiUrl + '/edit/' + budget.id, budget, {observe: "response"})
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
