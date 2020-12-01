import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import playersJson from '../../../../assets/playersJson.json';

@Injectable({
    providedIn: 'root'
})
export class SmartphoneProfileService{

    private hostURI: string;

    constructor(private http: HttpClient){
        this.hostURI = environment.host;
    }

    public getProfile(img, name, age, hometown, city, occupation, points, fax, why) {

        console.log('and you know iiit bruh');

        return this.http.post(`${this.hostURI}/api/smartphoneProfile/getProfile`,
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

    public nextPlayer(name) {

        console.log('ieee epomenooos');
        for (var i=0; i<playersJson.length; i++) {
            if (name == playersJson[i].name) {
                i++;
                if(i===16){ //last player, back to first
                    i=0;
                }
                console.log(i);
                return this.http.post(`${this.hostURI}/api/smartphoneProfile/nextPlayer`,
                {
                    message: {
                        img: playersJson[i].img,
                        name: playersJson[i].name,
                        age: playersJson[i].age,
                        hometown: playersJson[i].hometown,
                        city: playersJson[i].city,
                        occupation: playersJson[i].occupation,
                        points: playersJson[i].points,
                        fax: playersJson[i].fax,
                        why: playersJson[i].why
                    }
                    , event: "next player"
                })
            }
        }
    }
}

