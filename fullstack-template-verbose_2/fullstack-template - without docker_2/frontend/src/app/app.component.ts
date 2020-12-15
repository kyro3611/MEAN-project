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

    /*play video event listener*/
    this.socketService.syncMessages("play video").subscribe(msg => {
      /**update current video player (device)*/
      this.globals.paused = 0;
      this.globals.currentVideoPlayer = msg.message.device;
      this.globals.currentVideo = msg.message.number;
    })

    /*pause/play video event listener*/
    this.socketService.syncMessages("pause or play").subscribe(msg =>{
      /**update global paused variable*/
      if(this.globals.paused == 0){
        this.globals.paused = 1;
      } else{
        this.globals.paused = 0;
      }
    })
  }
}
