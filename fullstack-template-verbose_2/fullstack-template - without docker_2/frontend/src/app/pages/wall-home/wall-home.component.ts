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

  constructor(private route:ActivatedRoute, private wallHomeService: WallHomeService,
    private socketService: SocketsService, private renderer: Renderer2) {
      this.socketEvents = [];
  }

  ngOnInit() {
    /*play video event*/
    this.socketService.syncMessages("play video").subscribe(msg => {
      console.log('playing video...');
      console.log(msg.message.url);

      this.video.nativeElement.src = msg.message.url;                             /*set src as given url*/
      this.renderer.setStyle(this.video.nativeElement, 'visibility', 'visible');  /*show iframe */
      this.renderer.setStyle(this.logo.nativeElement, 'visibility', 'hidden');    /*hide logo */
    })
  }

}
