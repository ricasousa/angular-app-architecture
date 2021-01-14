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
        'X-Api-Key': 'api-key',
        Authorization: 'Bearer token...',
      }),
    };

    const apiRequest = req.clone({
      headers: httpOptions.headers,
    });

    return next.handle(apiRequest);
  }
}
