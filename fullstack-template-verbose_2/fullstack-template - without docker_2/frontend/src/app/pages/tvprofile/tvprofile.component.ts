import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SocketsService } from 'src/app/global/services';
import { ActivatedRoute, Router } from '@angular/router';
import { TVProfileService } from 'src/app/global/services/TVProfile/TVProfile.service';
import playersJson from '../../../assets/playersJson.json';
import { Location } from '@angular/common';

@Component({
  selector: 'ami-fullstack-tvprofile',
  templateUrl: './tvprofile.component.html',
  styleUrls: ['../../../assets/cssTV/playersstyle.css', '../../../assets/cssTV/players1style.css', '../../../assets/cssTV/headerstyle.css']

})
export class TVProfileComponent implements OnInit {
  @ViewChild('profimg', { static: false }) public profimg: ElementRef;
  @ViewChild('name', { static: false }) public name2: ElementRef;
  @ViewChild('age', { static: false }) public age2: ElementRef;
  @ViewChild('hometown', { static: false }) public hometown2: ElementRef;
  @ViewChild('city', { static: false }) public city2: ElementRef;
  @ViewChild('occupation', { static: false }) public occupation2: ElementRef;
  @ViewChild('points', { static: false }) public points2: ElementRef;
  @ViewChild('fax', { static: false }) public fax2: ElementRef;
  @ViewChild('why', { static: false }) public why2: ElementRef;

  public img;
  public name;
  public age;
  public hometown;
  public city;
  public occupation;
  public points;
  public fax;
  public why;
  public playerindex;
  public socketEvents: { event: string, message: any }[];


  constructor(private route: ActivatedRoute, private TVProfileService: TVProfileService,
    private socketService: SocketsService, private location: Location) {
    this.socketEvents = [];
  }

  ngOnInit() {
    for (var i in playersJson) {
      if (this.route.snapshot.paramMap.get("name") === playersJson[i].name) {
        var player = playersJson[i];
        this.playerindex = i;
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

  /**next or previous player profile */
  public nextPlayer(x) {
    var nextPlayer = null;

    if (x == 1) {           /**next */
      if (this.playerindex < playersJson.length - 1) {
        nextPlayer = playersJson[++this.playerindex];
      } else {
        this.playerindex = 0
        nextPlayer = playersJson[this.playerindex];
      }
    } else if (x == -1) {   /**previous */
      if (this.playerindex > 0) {
        nextPlayer = playersJson[--this.playerindex];
      } else {
        this.playerindex = playersJson.length - 1
        nextPlayer = playersJson[this.playerindex];
      }
    }
    if (nextPlayer != null) {
      this.profimg.nativeElement.src = " " + nextPlayer.img;
      this.name2.nativeElement.innerHTML = " " + nextPlayer.name;
      this.age2.nativeElement.innerHTML = " " + nextPlayer.age;
      this.hometown2.nativeElement.innerHTML = " " + nextPlayer.hometown;
      this.city2.nativeElement.innerHTML = " " + nextPlayer.city;
      this.occupation2.nativeElement.innerHTML = " " + nextPlayer.occupation;
      this.points2.nativeElement.innerHTML = " " + nextPlayer.points;
      this.fax2.nativeElement.innerHTML = " " + nextPlayer.fax;
      this.why2.nativeElement.innerHTML = " " + nextPlayer.why;
      this.location.replaceState("/TVProfile/" + nextPlayer.name);
    }
  }

}
