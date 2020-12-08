import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TwitterSmartphoneService {

    private hostURI: string;

    constructor(private http: HttpClient) {
        this.hostURI = environment.host;
    }

    public sendTweet(tweets) {

        console.log('pempti fora den to deixnw bro');

        return this.http.post(`${this.hostURI}/api/smartphone/sendTweet`,
            {
                message: {
                    tweets: tweets
                }
                , event: "send tweet"
            })
    }

    public sendTweet2(tweets) {

        console.log('pempti fora den to deixnw brooooooooooooo');

        return this.http.post(`${this.hostURI}/api/smartphone/sendTweet`,
            {
                message: {
                    tweets: tweets
                }
                , event: "send tweet2"
            })
    }
}