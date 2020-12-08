import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SocketsService } from 'src/app/global/services';
import { Router } from '@angular/router';
import { TwitterSmartphoneService } from 'src/app/global/services/twitterSmartphone/twitterSmartphone.service';
import tweetsJson from '../../../assets/tweetsJson.json';


@Component({
  selector: 'ami-fullstack-twitter-smartphone',
  templateUrl: './twitter-smartphone.component.html',
  styleUrls: ['css/twitter_style.css', 'css/navbar_style.css']
})

export class TwitterSmartphoneComponent implements OnInit {
  @ViewChild('text_box', { static: false }) public text_box: ElementRef;

  public tweet;
  public socketEvents: { event: string, message: any }[];

  constructor(private router: Router, private TwitterSmartphoneS: TwitterSmartphoneService,
    private socketService: SocketsService) {
    this.socketEvents = [];
  }

  ngOnInit() {
    this.socketService.syncMessages("send tweet2").subscribe(msg => {
      this.socketEvents.push(msg);
    })
    this.socketService.syncMessages("send tweet").subscribe(msg => {
      this.socketEvents.push(msg);
      this.redirectTo('/twitterSmartphone');
    })
    this.sendTweet2();
    // this.sendTweet();

  }

  public send() {
    this.tweet = { name: "wtf", txt: this.text_box.nativeElement.value };
    tweetsJson.unshift(this.tweet);
    this.sendTweet();

  }

  public sendTweet() {
    this.TwitterSmartphoneS.sendTweet(tweetsJson).subscribe();
  }
  public sendTweet2() {
    console.log(tweetsJson);
    this.TwitterSmartphoneS.sendTweet2(tweetsJson).subscribe();
  }

  redirectTo(uri: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([uri]));
  }
  trackByFn(index, t) {
    console.log(index);
    return index; // or item.id

  }
}
