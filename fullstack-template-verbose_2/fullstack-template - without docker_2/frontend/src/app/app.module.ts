import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { ExampleComponent } from './pages/example/example.component';
import { TVHomeComponent } from './pages/tvhome/tvhome.component';
import { TVLivestreamsComponent } from './pages/tvlivestreams/tvlivestreams.component';
import { SmartphonePlayersComponent } from './pages/smartphone-players/smartphone-players.component';
import { HomepageSmartphoneComponent } from './pages/homepage-smartphone/homepage-smartphone.component';
import { TwitterSmartphoneComponent } from './pages/twitter-smartphone/twitter-smartphone.component';
import { VoteSmartphoneComponent } from './pages/vote-smartphone/vote-smartphone.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    TVHomeComponent,
    TVLivestreamsComponent,
    SmartphonePlayersComponent,
    HomepageSmartphoneComponent,
    TwitterSmartphoneComponent,
    VoteSmartphoneComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'TVHome', component: TVHomeComponent},
      {path: 'TVLivestreams', component: TVLivestreamsComponent},
      {path: 'homepageSmartphone', component: HomepageSmartphoneComponent},
      {path: 'twitterSmartphone', component: TwitterSmartphoneComponent},
      {path: 'voteSmartphone', component: VoteSmartphoneComponent},
      {path: 'smartphonePlayers', component: SmartphonePlayersComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
