import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {}

  public logIn() {
    return this.httpClient.post('null', null)
  }

  public logOut() {
    return this.httpClient.post('null', null)
  }

  public signUp() {
    return this.httpClient.post('null', null)
  }

}
