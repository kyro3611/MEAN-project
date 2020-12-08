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

    public playVideo(url, number){
        console.log('yeeeahhh ' + number);

        return this.http.post(`${this.hostURI}/api/wallHome/playVideo`,
        {
            message: {
                url: url,
                number: number
            }
            , event: "play video"
        })
    }
}