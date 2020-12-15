import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  subscription: Subscription;

  constructor(private TwitterSmartphoneS: TwitterSmartphoneService, private globals: Globals) {
  }

  ngOnInit() {
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
