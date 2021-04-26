import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
//import { environment } from '@env';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer token...',
      }),
    };

    // const loginSession = this.authService.loginSession();
    // if (loginSession) {
    //   const { username } = loginSession;
    //   httpOptions.headers = httpOptions.headers.append(
    //     'another-header-key',
    //     username
    //   );
    // }

    const apiRequest = req.clone({
      headers: httpOptions.headers,
    });

    return next.handle(apiRequest);
  }
}
