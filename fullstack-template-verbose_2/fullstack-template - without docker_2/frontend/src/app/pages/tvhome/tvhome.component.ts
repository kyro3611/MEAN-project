import { Component, OnInit } from '@angular/core';
import { SocketsService } from 'src/app/global/services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ami-fullstack-tvhome',
  templateUrl: './tvhome.component.html',
  styleUrls: ['./css/homestyle.css', './css/headerstyle.css']
})
export class TVHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
