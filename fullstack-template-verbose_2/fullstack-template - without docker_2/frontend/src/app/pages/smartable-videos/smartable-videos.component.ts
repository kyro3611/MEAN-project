import { Component, OnInit } from '@angular/core';
import { SmartableVideosService } from 'src/app/global/services/SmartableVideos/SmartableVideos.service';
import { SocketsService } from 'src/app/global/services';
import { ActivatedRoute, Router } from '@angular/router';
import { Globals } from '../globals';

@Component({
  selector: 'ami-fullstack-smartable-videos',
  templateUrl: './smartable-videos.component.html',
  styleUrls: ['css/table_style_videos.css']
})
export class SmartableVideosComponent implements OnInit {
  public socketEvents: { event: string, message: any }[];

  public previousVideo = 0;

  constructor(private route:ActivatedRoute, private smartableVideosService: SmartableVideosService,
    private socketService: SocketsService, private globals: Globals) {
      this.socketEvents = [];
  }

  ngOnInit() {
    /*play video event listener*/
    this.socketService.syncMessages("play video").subscribe(msg => {

      /**update video style and hide buttons if TV called playVideo() */
      if(msg.message.device != 1) {

        console.log('nyees');

        if(this.previousVideo > 0){
          /**hide buttons (pause, screenshot, record) */
          (<HTMLInputElement>document.getElementById("pause_"+this.previousVideo )).style.visibility = 'hidden';
          (<HTMLInputElement>document.getElementById("play_"+this.previousVideo )).style.visibility = 'hidden';
          (<HTMLInputElement>document.getElementById("screenshot_"+this.previousVideo )).style.visibility= 'hidden';
          (<HTMLInputElement>document.getElementById("record_"+this.previousVideo )).style.visibility= 'hidden';
          /**change border color of thumbnail */
          (<HTMLInputElement>document.getElementById("thumbnail_"+this.previousVideo)).style.borderStyle= 'none';
          (<HTMLInputElement>document.getElementById("thumbnail_"+this.previousVideo)).style.borderColor= 'none';
        }
      }
    })

    if(this.globals.currentVideoPlayer == 1){
      /**show buttons (pause/play, screenshot, record) */
      if(this.globals.paused == 0){
        (<HTMLInputElement>document.getElementById("pause_"+this.globals.currentVideo)).style.visibility= 'visible';
      } else {
        (<HTMLInputElement>document.getElementById("play_"+this.globals.currentVideo)).style.visibility= 'visible';
      }
      (<HTMLInputElement>document.getElementById("screenshot_"+this.globals.currentVideo)).style.visibility= 'visible';
      (<HTMLInputElement>document.getElementById("record_"+this.globals.currentVideo)).style.visibility= 'visible';

      /**change border color of thumbnail */
      (<HTMLInputElement>document.getElementById("thumbnail_"+this.globals.currentVideo)).style.borderStyle= 'solid';
      (<HTMLInputElement>document.getElementById("thumbnail_"+this.globals.currentVideo)).style.borderColor= '#DB00FF';
    }
  }

  /*play video to wall function */
  public playVideo(url, number, device){
    
    if((number != this.globals.currentVideo && device == this.globals.currentVideoPlayer) 
        || (device != this.globals.currentVideoPlayer)) {

      console.log('play video please');

      /**set global variables */
      this.globals.currentVideo = number;
      this.globals.currentVideoPlayer = device;

      /**show buttons (pause, screenshot, record) */
      (<HTMLInputElement>document.getElementById("pause_"+number)).style.visibility= 'visible';
      (<HTMLInputElement>document.getElementById("screenshot_"+number)).style.visibility= 'visible';
      (<HTMLInputElement>document.getElementById("record_"+number)).style.visibility= 'visible';

      /**change border color of thumbnail */
      (<HTMLInputElement>document.getElementById("thumbnail_"+number)).style.borderStyle= 'solid';
      (<HTMLInputElement>document.getElementById("thumbnail_"+number)).style.borderColor= '#DB00FF';

      /**reset previously played video */
      if(this.previousVideo > 0){
        (<HTMLInputElement>document.getElementById("pause_"+this.previousVideo)).style.visibility= 'hidden';
        (<HTMLInputElement>document.getElementById("play_"+this.previousVideo)).style.visibility = "hidden" ;
        (<HTMLInputElement>document.getElementById("screenshot_"+this.previousVideo)).style.visibility= 'hidden';
        (<HTMLInputElement>document.getElementById("record_"+this.previousVideo)).style.visibility= 'hidden';
        (<HTMLInputElement>document.getElementById("thumbnail_"+this.previousVideo)).style.borderStyle= 'none';
        (<HTMLInputElement>document.getElementById("thumbnail_"+this.previousVideo)).style.borderColor= 'none';
      }

      /**set previous */
      this.previousVideo = number;

      /**call playVideo() from service */
      this.smartableVideosService.playVideo(url, number, device).subscribe();
    }
  }

  /**pause video */
  public pause_play(number){
    if(this.globals.currentVideo == number && this.globals.currentVideoPlayer == 1){
      /**visibilities */
      if(this.globals.paused == 0 ){
        console.log('pause please');
        (<HTMLInputElement>document.getElementById("pause_"+number)).style.visibility = "hidden" ;
        (<HTMLInputElement>document.getElementById("play_"+number)).style.visibility = "visible" ;
      } else {
        console.log('play please');
        (<HTMLInputElement>document.getElementById("pause_"+number)).style.visibility = "visible" ;
        (<HTMLInputElement>document.getElementById("play_"+number)).style.visibility = "hidden" ;
      }
      /**call pause_play() from service */
      this.smartableVideosService.pause_play(number).subscribe();
    }
  }

}
