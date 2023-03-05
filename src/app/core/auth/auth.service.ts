import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  logIn(): Observable<any> {
    return this.httpClient.post('null', null);
  }

  logOut(): Observable<any> {
    return this.httpClient.post('null', null);
  }

  signUp(): Observable<any> {
    return this.httpClient.post('null', null);
  }

  getAuthorizationToken(): any {
    // Fake
    return 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.' +
      'eyJtZXNzYWdlIjoiSldUIFJ1bGVzISIsImlhdCI6MTQ1OTQ0ODExOSwiZXhwIjoxNDU5NDU0NTE5fQ.' +
      '-yIVBD5b73C75osbmwwshQNRC7frWUYrqaTjTpza2y4';
  }
}
