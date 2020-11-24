import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { ExampleComponent } from './pages/example/example.component';
import { BigbratantvComponent } from './pages/bigbratantv/bigbratantv.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    BigbratantvComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
