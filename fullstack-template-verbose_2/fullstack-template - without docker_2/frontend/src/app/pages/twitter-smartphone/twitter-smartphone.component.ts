import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SocketsService } from 'src/app/global/services';
import { Router } from '@angular/router';
import { TwitterSmartphoneService } from 'src/app/global/services/twitterSmartphone/twitterSmartphone.service';
import { Globals } from '../globals'
import { Subscription } from 'rxjs';

@Component({
  selector: 'ami-fullstack-twitter-smartphone',
  templateUrl: './twitter-smartphone.component.html',
  styleUrls: ['css/twitter_style.css', 'css/navbar_style.css']
})

export class TwitterSmartphoneComponent implements OnInit {
  @ViewChild('text_box', { static: false }) public text_box: ElementRef;

  public tweet;
  public socketEvents: { event: string, message: any }[];
  subscription: Subscription;


  constructor(private router: Router, private TwitterSmartphoneS: TwitterSmartphoneService,
    private socketService: SocketsService, private globals: Globals) {
    this.socketEvents = [];
  }

  ngOnInit() {
    this.subscription = this.socketService.syncMessages("send tweet").subscribe(msg => {
      this.globals.tweets.unshift(msg.message.tweet);
      console.log(this.globals.tweets);
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /*send tweet*/
  public send() {
    this.tweet = { name: "wtf", txt: this.text_box.nativeElement.value };
    this.text_box.nativeElement.value = "";
    this.sendTweet();
  }

  /*call service function */
  public sendTweet() {
    this.TwitterSmartphoneS.sendTweet(this.tweet).subscribe();
  }
}
