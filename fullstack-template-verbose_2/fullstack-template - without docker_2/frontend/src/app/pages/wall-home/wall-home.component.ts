import { Component, Renderer2, ElementRef, OnInit, ViewChild } from '@angular/core';
import { WallHomeService } from 'src/app/global/services/wallHome/wallHome.service';
import { SocketsService } from 'src/app/global/services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ami-fullstack-wall-home',
  templateUrl: './wall-home.component.html',
  styleUrls: ['css/wall_style.css']
})
export class WallHomeComponent implements OnInit {
  @ViewChild('logo', { static: false }) public logo: ElementRef;
  @ViewChild('video', { static: false }) public video: ElementRef;

  public socketEvents: {event: string, message: any}[];

  /**indicates if video is paused(0) or not(1) */
  public paused = 0;

  constructor(private route:ActivatedRoute, private wallHomeService: WallHomeService,
    private socketService: SocketsService, private renderer: Renderer2) {
      this.socketEvents = [];
  }

  ngOnInit() {
    /*play video event*/
    this.socketService.syncMessages("play video").subscribe(msg => {
      console.log('playing video...');
      this.paused = 0;

      this.video.nativeElement.src = msg.message.url;                             /*set src as given url*/
      this.renderer.setStyle(this.video.nativeElement, 'visibility', 'visible');  /*show iframe */
      this.renderer.setStyle(this.logo.nativeElement, 'visibility', 'hidden');    /*hide logo */
    })

    /*pause or play video event*/
    this.socketService.syncMessages("pause or play").subscribe(msg => {
      var iframe = document.getElementsByTagName("iframe")[0].contentWindow;
      if(this.paused == 0 ){
        this.paused = 1;
        console.log('video paused');
        iframe.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*'); /** pause*/
      } else {
        this.paused = 0;
        console.log('video continues');
        iframe.postMessage('{"event":"command","func":"playVideo","args":""}', '*');  /** play*/
      }
    })
  }

}
