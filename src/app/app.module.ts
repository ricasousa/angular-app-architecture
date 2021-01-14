import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { CoreModule } from '@core/core.module';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [AppComponent, StartPageComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
