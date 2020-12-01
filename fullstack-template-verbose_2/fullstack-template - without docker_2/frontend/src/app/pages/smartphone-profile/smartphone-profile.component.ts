import { Component, OnInit } from '@angular/core';
import { SocketsService } from 'src/app/global/services';
import { ActivatedRoute, Router } from '@angular/router';
import { SmartphoneProfileService } from 'src/app/global/services/SmartphoneProfile/SmartphoneProfile.service';
import playersJson from '../../../assets/playersJson.json';
import { find } from 'lodash';

@Component({
  selector: 'ami-fullstack-smartphone-profile',
  templateUrl: './smartphone-profile.component.html',
  styleUrls: ['css/players_profile_style.css', 'css/navbar_style.css']
})
export class SmartphoneProfileComponent implements OnInit {

  public img;
  public name;
  public age;
  public hometown;
  public city;
  public occupation;
  public points;
  public fax;
  public why;
  public socketEvents: { event: string, message: any }[];


  constructor(private route: ActivatedRoute, private SmartProfileService: SmartphoneProfileService,
    private socketService: SocketsService) {
    this.socketEvents = [];
  }

  ngOnInit() {
    for (var i in playersJson) {
      if (this.route.snapshot.paramMap.get("name") == playersJson[i].name) {
        var player = playersJson[i];
      }
    }
    this.name = this.route.snapshot.paramMap.get("name");
    this.img = player.img;
    this.age = player.age;
    this.hometown = player.hometown;
    this.city = player.city;
    this.occupation = player.occupation;
    this.points = player.points;
    this.fax = player.fax;
    this.why = player.why;
    this.socketService.syncMessages("getting profile").subscribe(msg => {
      this.socketEvents.push(msg);
    })
    this.getProfile();
  }

  public getProfile() {
    this.SmartProfileService.getProfile(this.img, " " + this.name, " " + this.age, " " + this.hometown,
      " " + this.city, " " + this.occupation, " " + this.points, " " + this.fax, " " + this.why).subscribe();
  }

}
