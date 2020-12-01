import { Component, OnInit } from '@angular/core';
import { SocketsService } from 'src/app/global/services';
import { ActivatedRoute, Router } from '@angular/router';
import { TVProfileService } from 'src/app/global/services/TVProfile/TVProfile.service';
import playersJson from '../../../assets/playersJson.json';

@Component({
  selector: 'ami-fullstack-tvprofile',
  templateUrl: './tvprofile.component.html',
  styleUrls: ['../../../assets/cssTV/playersstyle.css', '../../../assets/cssTV/players1style.css', '../../../assets/cssTV/headerstyle.css']

})
export class TVProfileComponent implements OnInit {

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


  constructor(private route: ActivatedRoute, private TVProfileService: TVProfileService,
    private socketService: SocketsService) {
    this.socketEvents = [];
  }

  ngOnInit() {
    for (var i in playersJson) {
      if (this.route.snapshot.paramMap.get("name") === playersJson[i].name) {
        var player = playersJson[i];
        break;
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
    this.TVProfileService.getProfile(this.img, " " + this.name, " " + this.age, " " + this.hometown,
      " " + this.city, " " + this.occupation, " " + this.points, " " + this.fax, " " + this.why).subscribe();
  }

}
