import { Component, OnInit } from '@angular/core';
import { SmartableVideosService } from 'src/app/global/services/SmartableVideos/SmartableVideos.service';
import { SocketsService } from 'src/app/global/services';
import { ActivatedRoute, Router } from '@angular/router';
import { Globals } from '../globals';

@Component({
  selector: 'ami-fullstack-tvhome',
  templateUrl: './tvhome.component.html',
  styleUrls: ['../../../assets/cssTV/homestyle.css', '../../../assets/cssTV/headerstyle.css']
})
export class TVHomeComponent implements OnInit {
  public socketEvents: { event: string, message: any }[];

  constructor(private route:ActivatedRoute, private smartableVideosService: SmartableVideosService,
    private socketService: SocketsService, private globals: Globals) {
      this.socketEvents = [];
  }

  ngOnInit() {
  }

  /*play video to wall function */
  public playVideo(url, number, device){
    console.log('play video please');
    /**call playVideo() from service */
    this.smartableVideosService.playVideo(url, number, device).subscribe();
  }
}
