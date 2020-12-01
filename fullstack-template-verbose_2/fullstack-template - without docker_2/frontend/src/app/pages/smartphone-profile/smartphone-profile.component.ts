import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SocketsService } from 'src/app/global/services';
import { ActivatedRoute, Router } from '@angular/router';
import { SmartphoneProfileService } from 'src/app/global/services/SmartphoneProfile/SmartphoneProfile.service';
import playersJson from '../../../assets/playersJson.json';
import { Location } from '@angular/common';


@Component({
  selector: 'ami-fullstack-smartphone-profile',
  templateUrl: './smartphone-profile.component.html',
  styleUrls: ['css/players_profile_style.css', 'css/navbar_style.css']
})
export class SmartphoneProfileComponent implements OnInit {
  @ViewChild('profimg', { static: false }) public profimg: ElementRef;
  @ViewChild('name', { static: false }) public name2: ElementRef;
  @ViewChild('age', { static: false }) public age2: ElementRef;
  @ViewChild('hometown', { static: false }) public hometown2: ElementRef;
  @ViewChild('city', { static: false }) public city2: ElementRef;
  @ViewChild('occupation', { static: false }) public occupation2: ElementRef;
  @ViewChild('points', { static: false }) public points2: ElementRef;
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


  constructor(private route: ActivatedRoute, private SmartProfileService: SmartphoneProfileService,
    private socketService: SocketsService, private location: Location) {
    this.socketEvents = [];
  }

  ngOnInit() {
    for (var i in playersJson) {
      console.log(i);
      if (this.route.snapshot.paramMap.get("name") == playersJson[i].name) {
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
    this.SmartProfileService.getProfile(this.img, " " + this.name, " " + this.age, " " + this.hometown,
      " " + this.city, " " + this.occupation, " " + this.points, " " + this.fax, " " + this.why).subscribe();
  }

  public nextPlayer() {
    if (this.playerindex < playersJson.length - 1) {
      var nextPlayer = playersJson[++this.playerindex]
      this.profimg.nativeElement.src = " " + nextPlayer.img;
      this.name2.nativeElement.innerHTML = " " + nextPlayer.name;
      this.age2.nativeElement.innerHTML = " " + nextPlayer.age;
      this.hometown2.nativeElement.innerHTML = " " + nextPlayer.hometown;
      this.city2.nativeElement.innerHTML = " " + nextPlayer.city;
      this.occupation2.nativeElement.innerHTML = " " + nextPlayer.occupation;
      this.points2.nativeElement.innerHTML = " " + nextPlayer.points;
      this.why2.nativeElement.innerHTML = " " + nextPlayer.why;
      this.location.replaceState("/smartphonePlayers/" + nextPlayer.name);
    }
  }

  public prevPlayer() {
    if (this.playerindex > 0) {
      var prevPlayer = playersJson[--this.playerindex]
      this.profimg.nativeElement.src = " " + prevPlayer.img;
      this.name2.nativeElement.innerHTML = " " + prevPlayer.name;
      this.age2.nativeElement.innerHTML = " " + prevPlayer.age;
      this.hometown2.nativeElement.innerHTML = " " + prevPlayer.hometown;
      this.city2.nativeElement.innerHTML = " " + prevPlayer.city;
      this.occupation2.nativeElement.innerHTML = " " + prevPlayer.occupation;
      this.points2.nativeElement.innerHTML = " " + prevPlayer.points;
      this.why2.nativeElement.innerHTML = " " + prevPlayer.why;
      this.location.replaceState("/smartphonePlayers/" + prevPlayer.name);
    }
  }
}
