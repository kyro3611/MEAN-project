import { Component, OnInit } from '@angular/core';
import { SocketsService } from 'src/app/global/services';
import { ActivatedRoute, Router } from '@angular/router';
import { VoteDoneSmartphoneService } from 'src/app/global/services/VoteDoneSmartphone/VoteDoneSmartphone.service';
import playersJson from '../../../assets/playersJson.json';
import { Location } from '@angular/common';
import { Globals } from '../globals';

@Component({
  selector: 'ami-fullstack-vote-done-smartphone',
  templateUrl: './vote-done-smartphone.component.html',
  styleUrls: ['css/vote_done_style.css', 'css/navbar_style.css']
})
export class VoteDoneSmartphoneComponent implements OnInit {
  public img;
  public name;
  public socketEvents: { event: string, message: any }[];

  constructor(private route: ActivatedRoute, private voteDoneSmartphoneService: VoteDoneSmartphoneService,
    private socketService: SocketsService, private location: Location, private globals: Globals) {
    this.socketEvents = [];
  }

  ngOnInit() {
    for (var i in playersJson) {
      if (this.route.snapshot.paramMap.get("name") == playersJson[i].name) {
        var player = playersJson[i];
        break;
      }
    }
    this.name = this.route.snapshot.paramMap.get("name");
    this.img = player.img;
    this.globals.voted = 1;
    this.globals.votedname = this.name;
  }
}
