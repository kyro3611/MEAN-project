import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from '../globals';

@Component({
  selector: 'ami-fullstack-vote-smartphone',
  templateUrl: './vote-smartphone.component.html',
  styleUrls: ['css/vote_style.css', 'css/navbar_style.css']
})
export class VoteSmartphoneComponent implements OnInit {

  constructor(private route: Router, private globals: Globals) { }

  ngOnInit() {
    if (this.globals.voted == 1) {
      this.route.navigate(['/voteSmartphone', this.globals.votedname]);
    }
  }

}
