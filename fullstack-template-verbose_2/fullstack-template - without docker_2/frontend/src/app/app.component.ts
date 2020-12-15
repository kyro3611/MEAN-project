import { Component } from '@angular/core';
import { SocketsService } from './global/services';
import { Globals } from './pages/globals';

@Component({
  selector: 'ami-fullstack-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private socketService: SocketsService, private globals: Globals) {
    // Connect to sockets server on startup
    this.socketService.initAndConnect();

    //How to consume an event
    this.socketService.syncMessages('eventName').subscribe((data) => {
      console.log('The message i received for this event is: ', data);
    });

  }

  ngOnInit() {
    this.socketService.syncMessages("send tweet").subscribe(msg => {
      this.globals.tweets.unshift(msg.message.tweet);
      console.log(this.globals.tweets);
    })
  }
}
