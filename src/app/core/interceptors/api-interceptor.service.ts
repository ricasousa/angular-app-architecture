import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-Api-Key': environment.apiKey
      })
    };

    const loginSession = { login: 'login', applicationToken: 'TOKEN' };
    if (loginSession) {
      const { login, applicationToken } = loginSession;
      httpOptions.headers = httpOptions.headers.append('header-1', login);
      httpOptions.headers = httpOptions.headers.append(
        'authorization',
        `bearer ${applicationToken}`
      );
    }

    const apiRequest = request.clone({
      headers: httpOptions.headers
    });

    return next.handle(apiRequest);
  }
}
