import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TVProfileService {

    private hostURI: string;

    constructor(private http: HttpClient) {
        this.hostURI = environment.host;
    }

    public getProfile(img, name, age, hometown, city, occupation, points, fax, why) {

        console.log('and you know iiit');

        return this.http.post(`${this.hostURI}/api/TV/getProfile`,
            {
                message: {
                    img: img,
                    name: name,
                    age: age,
                    hometown: hometown,
                    city: city,
                    occupation: occupation,
                    points: points,
                    fax: fax,
                    why: why
                }
                , event: "getting profile"
            })
    }
}