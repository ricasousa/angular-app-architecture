import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from '@env';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private url = `${environment.apiUrl}/basic-info`;

  constructor(private http: HttpClient) {}

  get(): void {
    console.log('===== HomeService');

    // return this.http.post(this.url, data).pipe(
    //   tap((resp) => console.log('resp', resp)),
    //   catchError(this.handleError)
    // );
  }
}
