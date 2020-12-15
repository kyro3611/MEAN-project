import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Globals } from '../globals';

@Component({
  selector: 'ami-fullstack-tvtwitter',
  templateUrl: './tvtwitter.component.html',
  styleUrls: ['../../../assets/cssTV/twitterstyle.css', '../../../assets/cssTV/headerstyle.css']
})
export class TVTwitterComponent implements OnInit {

  subscription: Subscription;

  constructor(private globals: Globals) { }

  ngOnInit() {
    
  }

}
