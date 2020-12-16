import { Component, OnInit } from '@angular/core';
import { SocketsService } from 'src/app/global/services';
import { ActivatedRoute, Router } from '@angular/router';
import { TVVoteDoneService } from 'src/app/global/services/TVVoteDOne/TVVoteDone.service';
import playersJson from '../../../assets/playersJson.json';
import { Location } from '@angular/common';

@Component({
  selector: 'ami-fullstack-tvvotedone',
  templateUrl: './tvvotedone.component.html',
  styleUrls: ['../../../assets/cssTV/playersstyle.css', '../../../assets/cssTV/players2style.css', '../../../assets/cssTV/headerstyle.css']
})
export class TVVotedoneComponent implements OnInit {

  public img;
  public name;
  public socketEvents: { event: string, message: any }[];

  constructor(private route: ActivatedRoute, private TVVoteDoneService: TVVoteDoneService, 
    private socketService: SocketsService, private location: Location) {
    this.socketEvents = [];
  }

  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get("name"))
    for (var i in playersJson) {
      if (this.route.snapshot.paramMap.get("name") === playersJson[i].name) {
        var player = playersJson[i];
        break;
      }
    }
    this.name = this.route.snapshot.paramMap.get("name");
    this.img = player.img;

    /**listening "vote from tv" event" */
    this.socketService.syncMessages("vote from TV").subscribe(msg => {
      console.log(msg);
      this.socketEvents.push(msg);
      
    })
    this.votePlayer();
  }

  public votePlayer(){
    this.TVVoteDoneService.votePlayer(this.img, " " + this.name).subscribe();
  }

}
