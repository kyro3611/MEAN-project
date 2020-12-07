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

    public playVideo(url){
        console.log('yeeeahhh');

        return this.http.post(`${this.hostURI}/api/wallHome/playVideo`,
        {
            message: {
                url: url
            }
            , event: "play video"
        })
    }
}