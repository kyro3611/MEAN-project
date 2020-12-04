import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class VoteDoneSmartphoneService{

    private hostURI: string;

    constructor(private http: HttpClient){
        this.hostURI = environment.host;
    }

    public voteComplete(name, img) {

        console.log('yeaaah');

        return this.http.post(`${this.hostURI}/api/voteDoneSmartphone/voteComplete`,
            {
                message: {
                    name: name,
                    img: img
                }
                , event: "vote complete"
            })
    }
}