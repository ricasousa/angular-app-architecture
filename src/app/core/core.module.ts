import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ErrorInterceptor } from './interceptors/error-interceptor.service';
import { ApiInterceptor } from './interceptors/api-interceptor.service';

/**
 * Eligible modules to place here...
 * TranslateModule.forRoot(…)
 * StoreModule.forRoot(…)
 */
@NgModule({
  exports: [HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ]
})
export class CoreModule {}
