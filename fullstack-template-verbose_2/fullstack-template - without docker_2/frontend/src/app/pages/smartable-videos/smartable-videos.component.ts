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

  /**previous playing video number */
  public previous = 0;

  /**currently playing video number */
  public current = 0;

  /**indicates if video is paused (1) or not (0) */
  public paused;

  constructor(private route:ActivatedRoute, private smartableVideosService: SmartableVideosService,
    private socketService: SocketsService) {
      this.socketEvents = [];
  }

  ngOnInit() {
  }

  /*play video to wall function */
  public playVideo(url, number){
    
    if(number != this.current) {

      console.log('play video please');

      /**set current */
      this.current=number;

      this.paused = 0;

      /**show buttons (pause, screenshot, record) */
      (<HTMLInputElement>document.getElementById("pause_"+number)).style.visibility= 'visible';
      (<HTMLInputElement>document.getElementById("screenshot_"+number)).style.visibility= 'visible';
      (<HTMLInputElement>document.getElementById("record_"+number)).style.visibility= 'visible';

      /**change border color of thumbnail */
      (<HTMLInputElement>document.getElementById("thumbnail_"+number)).style.borderStyle= 'solid';
      (<HTMLInputElement>document.getElementById("thumbnail_"+number)).style.borderColor= '#DB00FF';

      /**reset previously played video */
      if(this.previous > 0){
        (<HTMLInputElement>document.getElementById("pause_"+this.previous)).style.visibility= 'hidden';
        (<HTMLInputElement>document.getElementById("play_"+this.previous)).style.visibility = "hidden" ;
        (<HTMLInputElement>document.getElementById("screenshot_"+this.previous)).style.visibility= 'hidden';
        (<HTMLInputElement>document.getElementById("record_"+this.previous)).style.visibility= 'hidden';
        (<HTMLInputElement>document.getElementById("thumbnail_"+this.previous)).style.borderStyle= 'none';
        (<HTMLInputElement>document.getElementById("thumbnail_"+this.previous)).style.borderColor= 'none';
      }

      /**set previous */
      this.previous = number;

      /**call playVideo() from service */
      this.smartableVideosService.playVideo(url, number).subscribe();
    }
  }

  /**pause video */
  public pause_play(number){
    
    if(this.current == number){
      /**visibilities */
      if(this.paused == 0 ){
        console.log('pause please');
        (<HTMLInputElement>document.getElementById("pause_"+number)).style.visibility = "hidden" ;
        (<HTMLInputElement>document.getElementById("play_"+number)).style.visibility = "visible" ;
        this.paused = 1 ;
      } else {
        console.log('play please');
        (<HTMLInputElement>document.getElementById("pause_"+number)).style.visibility = "visible" ;
        (<HTMLInputElement>document.getElementById("play_"+number)).style.visibility = "hidden" ;
        this.paused = 0 ;
      }
      /**call pause_play() from service */
      this.smartableVideosService.pause_play(number).subscribe();
    }
  }

}
