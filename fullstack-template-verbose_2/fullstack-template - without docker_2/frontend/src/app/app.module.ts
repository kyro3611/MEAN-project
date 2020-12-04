import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { ExampleComponent } from './pages/example/example.component';
import { TVHomeComponent } from './pages/tvhome/tvhome.component';
import { TVLivestreamsComponent } from './pages/tvlivestreams/tvlivestreams.component';
import { TVHighlightsComponent } from './pages/tvhighlights/tvhighlights.component';
import { TVTwitterComponent } from './pages/tvtwitter/tvtwitter.component';
import { TVPlayersComponent } from './pages/tvplayers/tvplayers.component';
import { TVProfileComponent } from './pages/tvprofile/tvprofile.component';
import { TVVoteComponent } from './pages/tvvote/tvvote.component';
import { TVPollsComponent } from './pages/tvpolls/tvpolls.component';
import { TVRulesComponent } from './pages/tvrules/tvrules.component';
import { SmartphonePlayersComponent } from './pages/smartphone-players/smartphone-players.component';
import { HomepageSmartphoneComponent } from './pages/homepage-smartphone/homepage-smartphone.component';
import { TwitterSmartphoneComponent } from './pages/twitter-smartphone/twitter-smartphone.component';
import { VoteSmartphoneComponent } from './pages/vote-smartphone/vote-smartphone.component';
import { SmartableHomeComponent } from './pages/smartable-home/smartable-home.component';
import { SmartableVideosComponent } from './pages/smartable-videos/smartable-videos.component';
import { SmartphoneProfileComponent } from './pages/smartphone-profile/smartphone-profile.component';
import { VoteDoneSmartphoneComponent } from './pages/vote-done-smartphone/vote-done-smartphone.component';
import { WallHomeComponent } from './pages/wall-home/wall-home.component';
import { TVVotedoneComponent } from './pages/tvvotedone/tvvotedone.component';


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
    TVHighlightsComponent,
    TVTwitterComponent,
    TVPlayersComponent,
    TVProfileComponent,
    TVVoteComponent,
    TVPollsComponent,
    TVRulesComponent,
    SmartableHomeComponent,
    SmartableVideosComponent,
    SmartphoneProfileComponent,
    VoteDoneSmartphoneComponent,
    WallHomeComponent,
    TVVotedoneComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'example/:id', component: ExampleComponent },
      { path: 'TVHome', component: TVHomeComponent },
      { path: 'TVLivestreams', component: TVLivestreamsComponent },
      { path: 'TVHighlights', component: TVHighlightsComponent },
      { path: 'TVTwitter', component: TVTwitterComponent },
      { path: 'TVPlayers', component: TVPlayersComponent },
      { path: 'TVPlayers/:name', component: TVProfileComponent },
      { path: 'TVVote', component: TVVoteComponent },
      { path: 'TVVotedone', component: TVVotedoneComponent },
      { path: 'TVPolls', component: TVPollsComponent },
      { path: 'TVRules', component: TVRulesComponent },
      { path: 'homepageSmartphone', component: HomepageSmartphoneComponent },
      { path: 'twitterSmartphone', component: TwitterSmartphoneComponent },
      { path: 'voteSmartphone', component: VoteSmartphoneComponent },
      { path: 'voteSmartphone/:name', component: VoteDoneSmartphoneComponent },
      { path: 'voteDoneSmartphone', component: VoteDoneSmartphoneComponent},
      { path: 'smartphonePlayers', component: SmartphonePlayersComponent },
      { path: 'smartphoneProfile', component: SmartphoneProfileComponent },
      { path: 'smartphonePlayers/:name', component: SmartphoneProfileComponent },
      { path: 'smartableHome', component: SmartableHomeComponent},
      { path: 'smartableVideos', component: SmartableVideosComponent},
      { path: 'wallHome', component: WallHomeComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
