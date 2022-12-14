import { Component, OnInit } from '@angular/core';
import { ExampleService } from 'src/app/global/services/example/example.service';
import { SocketsService } from 'src/app/global/services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ami-fullstack-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

  public myUSerID;
  public userIDtoTreat;
  public foodToTreat;
  public socketEvents: {event: string, message: any}[];
  
  constructor(private route:ActivatedRoute, private exampleService: ExampleService,
    private socketService: SocketsService) {
      this.socketEvents = [];
  }

  ngOnInit() {
    this.myUSerID = this.route.snapshot.paramMap.get("id");
    this.userIDtoTreat = "userToTreat";
    this.foodToTreat = "afoodToTreat";
    this.socketService.syncMessages("treating").subscribe(msg => {
      this.socketEvents.push(msg);
    })
  }

  public treatSomeone(){
    this.exampleService.treatSomeone(this.foodToTreat, this.userIDtoTreat,
      "browser"+this.myUSerID).subscribe();
  }
}
