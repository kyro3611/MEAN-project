import { Component, OnInit } from '@angular/core';
import { SmartableVideosService } from 'src/app/global/services/SmartableVideos/SmartableVideos.service';
import { SocketsService } from 'src/app/global/services';
import { ActivatedRoute, Router } from '@angular/router';
import { Globals } from '../globals';

@Component({
  selector: 'ami-fullstack-tvhighlights',
  templateUrl: './tvhighlights.component.html',
  styleUrls: ['../../../assets/cssTV/videosstyle.css', '../../../assets/cssTV/videos2style.css', '../../../assets/cssTV/headerstyle.css']
})
export class TVHighlightsComponent implements OnInit {
  public socketEvents: { event: string, message: any }[];

  /**previous playing video number */
  public previous = 0;

  constructor(private route:ActivatedRoute, private smartableVideosService: SmartableVideosService,
    private socketService: SocketsService, private globals: Globals) {
      this.socketEvents = [];
  }

  ngOnInit() {
    /*play video event listener*/
    this.socketService.syncMessages("play video").subscribe(msg => {
      
      /**update video style and hide buttons if smartable called playVideo() */
      if(msg.message.device != 3) {

        console.log('nyees');

        /**hide buttons (pause, screenshot, record) */
        (<HTMLInputElement>document.getElementById("pause_"+this.previous)).style.visibility= 'hidden';
        (<HTMLInputElement>document.getElementById("play_"+this.previous)).style.visibility = "hidden" ;
        /**change border color of thumbnail */
        (<HTMLInputElement>document.getElementById("thumbnail_"+this.previous)).style.borderStyle= 'none';
        (<HTMLInputElement>document.getElementById("thumbnail_"+this.previous)).style.borderColor= 'none';

        /**reset previous */
        this.previous = 0;
      }
    })

    if(this.globals.currentVideoPlayer == 3){
      /**show pause/play button*/
      if(this.globals.paused == 0){
        (<HTMLInputElement>document.getElementById("pause_"+this.globals.currentVideo)).style.visibility= 'visible';
      } else {
        (<HTMLInputElement>document.getElementById("play_"+this.globals.currentVideo)).style.visibility= 'visible';
      }

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
      this.globals.paused = 0;

      /**show buttons (pause, screenshot, record) */
      (<HTMLInputElement>document.getElementById("pause_"+number)).style.visibility= 'visible';

      /**change border color of thumbnail */
      (<HTMLInputElement>document.getElementById("thumbnail_"+number)).style.borderStyle= 'solid';
      (<HTMLInputElement>document.getElementById("thumbnail_"+number)).style.borderColor= '#DB00FF';

      /**reset previously played video */
      if(this.previous > 0){
        (<HTMLInputElement>document.getElementById("pause_"+this.previous)).style.visibility= 'hidden';
        (<HTMLInputElement>document.getElementById("play_"+this.previous)).style.visibility = "hidden" ;
        (<HTMLInputElement>document.getElementById("thumbnail_"+this.previous)).style.borderStyle= 'none';
        (<HTMLInputElement>document.getElementById("thumbnail_"+this.previous)).style.borderColor= 'none';
      }

      /**set previous */
      this.previous = number;

      /**call playVideo() from service */
      this.smartableVideosService.playVideo(url, number, device).subscribe();
    }
  }

  /**pause video */
  public pause_play(number){
    
    if(this.globals.currentVideo == number && this.globals.currentVideoPlayer == 3){
      /**visibilities */
      if(this.globals.paused == 0 ){
        console.log('pause please');
        (<HTMLInputElement>document.getElementById("pause_"+number)).style.visibility = "hidden" ;
        (<HTMLInputElement>document.getElementById("play_"+number)).style.visibility = "visible" ;
        this.globals.paused = 1 ;
      } else {
        console.log('play please');
        (<HTMLInputElement>document.getElementById("pause_"+number)).style.visibility = "visible" ;
        (<HTMLInputElement>document.getElementById("play_"+number)).style.visibility = "hidden" ;
        this.globals.paused = 0 ;
      }
      /**call pause_play() from service */
      this.smartableVideosService.pause_play(number).subscribe();
    }
  }

}
