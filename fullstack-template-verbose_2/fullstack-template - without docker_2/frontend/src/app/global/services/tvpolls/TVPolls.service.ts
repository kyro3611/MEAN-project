import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TVPollsService {

    private hostURI: string;

    constructor(private http: HttpClient) {
        this.hostURI = environment.host;
    }

    public getProfile(polls) {

        console.log('exiled');

        return this.http.post(`${this.hostURI}/api/TV/getPolls`,
            {
                message: {
                    polls: polls
                }
                , event: "getting polls tv"
            })
    }
}