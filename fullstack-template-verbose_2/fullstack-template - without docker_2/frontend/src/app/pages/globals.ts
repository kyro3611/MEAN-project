import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
    tweets: any[] = [];
    currentVideo = 0;
    currentVideoPlayer = 0;
    paused = 0;
    voted = 0;
    votedname;
}
