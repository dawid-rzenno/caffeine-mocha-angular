import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {BudgetInterface} from "./budget-form/common/budget.interface";

@Injectable()
export class BudgetService {
  private readonly apiUrl = '/api/budget'

  constructor(private http: HttpClient) {
  }

  public getAll(apiUrl: string = this.apiUrl): Observable<BudgetInterface[]> {
    return BudgetService.handleError(
      this.http.get<BudgetInterface[]>(`${apiUrl}/all`, {observe: "response"})
    )
  }

  public get(id: string, apiUrl: string = this.apiUrl): Observable<BudgetInterface> {
    return BudgetService.handleError(
      this.http.get<BudgetInterface>(`${apiUrl}/view/${id}`, {observe: "response"})
    )
  }

  public create(budget: BudgetInterface, apiUrl: string = this.apiUrl): Observable<BudgetInterface> {
    return BudgetService.handleError(
      this.http.post<BudgetInterface>(`${apiUrl}/create`, budget, {observe: "response"})
    )
  }

  public edit(budget: BudgetInterface, apiUrl: string = this.apiUrl): Observable<BudgetInterface> {
    return BudgetService.handleError(
      this.http.patch<BudgetInterface>(`${apiUrl}/edit`, budget, {observe: "response"})
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
