import { Component, OnInit } from '@angular/core';
import { SmartSpeakerService } from 'src/app/smart-speaker.service'
import { SocketsService } from 'src/app/global/services';
import {Router} from '@angular/router'; // import router from angular router


@Component({
  selector: 'ami-fullstack-tvvote',
  templateUrl: './tvvote.component.html',
  styleUrls: ['../../../assets/cssTV/playersstyle.css', '../../../assets/cssTV/players2style.css', '../../../assets/cssTV/headerstyle.css']
})
export class TVVoteComponent implements OnInit {
  public socketEvents: { event: string, message: any }[];

  constructor(private SMartSpeakerService: SmartSpeakerService,  private socketService: SocketsService,
     private route:Router) {
    this.socketEvents = [];  
  }

  ngOnInit() {
    this.SMartSpeakerService.voteVoiceCommand();
    /**listening "vote from tv" event" */
    this.socketService.syncMessages("vote from TV").subscribe(msg => {
      this.route.navigate(['/TVVotedone',msg.message.name]); // navigate to vote done
    })
    
  }

}
