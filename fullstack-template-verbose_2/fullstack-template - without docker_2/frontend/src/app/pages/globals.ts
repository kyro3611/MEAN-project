import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
    tweets: any[] = [];
    currentVideo = 0;
    currentVideoPlayer = 0;
    previousVideo = 0;
    previousVideoPlayer = 0;
    paused = 0;
}
