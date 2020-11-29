import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleComponent } from './pages/example/example.component';
import { SmartphonePlayersComponent } from './pages/smartphone-players/smartphone-players.component';
import { SmartphoneProfileComponent } from './pages/smartphone-profile/smartphone-profile.component';
import { HomepageSmartphoneComponent } from './pages/homepage-smartphone/homepage-smartphone.component';
import { TwitterSmartphoneComponent } from './pages/twitter-smartphone/twitter-smartphone.component';
import { VoteSmartphoneComponent } from './pages/vote-smartphone/vote-smartphone.component';
import { SmartableHomeComponent } from './pages/smartable-Home/smartable-Home.component';
import { SmartableVideosComponent } from './pages/smartable-Videos/smartable-Videos.component';
import { VoteDoneSmartphoneComponent } from './pages/vote-done-smartphone/vote-done-smartphone.component';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'socket-events', loadChildren: () => import('./pages/socket-events/socket-events.module').then(m => m.SocketEventsModule) },
  { path: 'tasks', loadChildren: () => import('./pages/tasks/tasks.module').then(m => m.TasksModule) },
  { path: 'example/:id', component: ExampleComponent},
  { path: 'smartphoneHomepage', component: HomepageSmartphoneComponent},
  { path: 'twitterSmartphone', component: TwitterSmartphoneComponent},
  { path: 'voteSmartphone', component: VoteSmartphoneComponent},
  { path: 'voteDoneSmartphone', component: VoteDoneSmartphoneComponent},
  { path: 'smartphonePlayers', component: SmartphonePlayersComponent},
  { path: 'smartphoneProfile', component: SmartphoneProfileComponent },
  { path: 'smartableHome', component: SmartableHomeComponent},
  { path: 'smartableVideos', component: SmartableVideosComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
