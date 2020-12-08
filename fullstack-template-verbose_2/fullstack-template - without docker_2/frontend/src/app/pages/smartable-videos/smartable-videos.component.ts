import { Component, OnInit } from '@angular/core';
import { SmartableVideosService } from 'src/app/global/services/SmartableVideos/SmartableVideos.service';
import { SocketsService } from 'src/app/global/services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ami-fullstack-smartable-videos',
  templateUrl: './smartable-videos.component.html',
  styleUrls: ['css/table_style_videos.css']
})
export class SmartableVideosComponent implements OnInit {
  public socketEvents: { event: string, message: any }[];

  constructor(private route:ActivatedRoute, private smartableVideosService: SmartableVideosService,
    private socketService: SocketsService) {
      this.socketEvents = [];
  }

  ngOnInit() {
  }

  /*play video to wall function */
  public playVideo(url){
    this.smartableVideosService.playVideo(url).subscribe();
  }
}
