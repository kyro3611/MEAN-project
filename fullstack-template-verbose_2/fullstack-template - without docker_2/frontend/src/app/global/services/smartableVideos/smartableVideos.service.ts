import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class SmartableVideosService{

    private hostURI: string;

    constructor(private http: HttpClient){
        this.hostURI = environment.host;
    }

    public playVideo(url, number, device){
        console.log('Video ' + number);

        return this.http.post(`${this.hostURI}/api/wallHome/playVideo`,
        {
            message: {
                url: url,
                number: number,
                device: device /**1:smartable , 2:TV */
            }
            , event: "play video"
        })
    }

    public pause_play(number){
        console.log('pause/play');

        return this.http.post(`${this.hostURI}/api/wallHome/pause_play`,
        {
            message: {
                number: number
            }
            , event: "pause or play"
        })
    }
}