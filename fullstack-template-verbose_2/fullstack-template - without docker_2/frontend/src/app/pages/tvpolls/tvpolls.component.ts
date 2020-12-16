import { Component, OnInit } from '@angular/core';
import { SocketsService } from 'src/app/global/services';
import { TVPollsService } from 'src/app/global/services/TVPolls/TVPolls.service';
import pollsJson from '../../../assets/pollsJson.json';

@Component({
  selector: 'ami-fullstack-tvpolls',
  templateUrl: './tvpolls.component.html',
  styleUrls: ['../../../assets/cssTV/playersstyle.css', '../../../assets/cssTV/players3style.css', '../../../assets/cssTV/headerstyle.css']
})
export class TVPollsComponent implements OnInit {

  public week = 2;
  public socketEvents: { event: string, message: any }[];

  constructor(private TVPollsService: TVPollsService,
    private socketService: SocketsService) {
    this.socketEvents = [];
  }

  ngOnInit() {
    this.socketService.syncMessages("getting polls tv").subscribe(msg => {
      this.socketEvents.push(msg);
    })
    this.getPolls(this.week);
    (<HTMLInputElement>document.getElementById("upb")).style.visibility = "hidden";
  }

  public getPolls(wee) {
    (<HTMLInputElement>document.getElementById("week")).innerHTML = "Week " + (wee + 1);
    console.log(pollsJson[wee]);
    this.TVPollsService.getProfile(pollsJson[wee]).subscribe();
  }

  public nextWeek(x) {
    if (x == 1) {           /**next */
      if (this.week < pollsJson.length - 1) {
        this.week++;
      }
    } else if (x == -1) {   /**previous */
      if (this.week > 0) {
        this.week--;
      }
    }
    if (this.week == pollsJson.length - 1) {
      (<HTMLInputElement>document.getElementById("upb")).style.visibility = "hidden";
    } else if (this.week == 0) {
      (<HTMLInputElement>document.getElementById("downb")).style.visibility = "hidden";
    } else {
      (<HTMLInputElement>document.getElementById("downb")).style.visibility = "visible";
      (<HTMLInputElement>document.getElementById("upb")).style.visibility = "visible";
    }
    this.socketEvents = [];
    this.getPolls(this.week);
  }
}
