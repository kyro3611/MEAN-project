import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SocketsService } from 'src/app/global/services';
import { TwitterSmartphoneService } from 'src/app/global/services/twitterSmartphone/twitterSmartphone.service';
import { Globals } from '../globals';

@Component({
  selector: 'ami-fullstack-tvtwitter',
  templateUrl: './tvtwitter.component.html',
  styleUrls: ['../../../assets/cssTV/twitterstyle.css', '../../../assets/cssTV/headerstyle.css']
})
export class TVTwitterComponent implements OnInit {

  subscription: Subscription;

  constructor(private TwitterSmartphoneS: TwitterSmartphoneService,
    private socketService: SocketsService, private globals: Globals) { }

  ngOnInit() {
    this.subscription = this.socketService.syncMessages("send tweet").subscribe(msg => {
      this.globals.tweets.unshift(msg.message.tweet);
      console.log(this.globals.tweets);
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
