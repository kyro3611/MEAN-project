import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { ExampleComponent } from './pages/example/example.component';
import { TVHomeComponent } from './pages/tvhome/tvhome.component';
import { SmartphoneHomeComponent } from './pages/smartphone-home/smartphone-home.component';
import { TVLivestreamsComponent } from './pages/tvlivestreams/tvlivestreams.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    TVHomeComponent,
    SmartphoneHomeComponent,
    TVLivestreamsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'TVHome', component: TVHomeComponent},
      {path: 'TVLivestreams', component: TVLivestreamsComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
