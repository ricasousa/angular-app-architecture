import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '@env';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  protected url = `${environment.apiUrl}/session`;

  constructor(private http: HttpClient) {
    console.log('Hello from AuthService');
  }

  loginSession() {
    // TODO: Retrieve from storage...
    return {
      user: 'Ricardo'
    };
  }

  login(username: string, pass: string): Observable<any> {
    const body = { username, pass };

    return this.http.post(`${this.url}`, body);
  }

  logout() {
    // remove user from local storage to log user out
    sessionStorage.removeItem('user');
  }
}
