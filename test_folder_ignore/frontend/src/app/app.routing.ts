import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BigbratantvComponent } from './pages/bigbratantv/bigbratantv.component';
import { ExampleComponent } from './pages/example/example.component';
import { TvComponent } from './pages/test-tv/test-tv.component';


const routes: Routes = [
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'socket-events', loadChildren: () => import('./pages/socket-events/socket-events.module').then(m => m.SocketEventsModule) },
  { path: 'tasks', loadChildren: () => import('./pages/tasks/tasks.module').then(m => m.TasksModule) },
  { path: 'example/:id', component: ExampleComponent },
  { path: 'bigbratantv', component: BigbratantvComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
