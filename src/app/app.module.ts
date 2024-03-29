import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { CoreModule } from '@core/core.module';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './pages/login/login.component';

import { SharedModule } from '@shared/shared.module';
import { TestFormComponent } from './pages/test-form/test-form.component';

/**
 * Para efeitos de testes...
 *
 * https://viacep.com.br/
 * https://httpbin.org/
 */

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    HeaderComponent,
    LoginComponent,
    TestFormComponent
  ],
  imports: [BrowserModule, AppRoutingModule, CoreModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
