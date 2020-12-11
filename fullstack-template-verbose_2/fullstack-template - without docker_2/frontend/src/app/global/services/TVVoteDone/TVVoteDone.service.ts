import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TVVoteDoneService {

    private hostURI: string;

    constructor(private http: HttpClient) {
        this.hostURI = environment.host;
    }

    public votePlayer(img, name) {

        console.log('psifoooos');

        return this.http.post(`${this.hostURI}/api/TV/voteCompleted`,
            {
                message: {
                    img: img,
                    name: name
                }
                , event: "vote from TV"
            })
    }
}