import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {
    console.log('Hello from AuthService');
  }

  logout() {
    // remove user from local storage to log user out
    sessionStorage.removeItem('user');
  }
}
