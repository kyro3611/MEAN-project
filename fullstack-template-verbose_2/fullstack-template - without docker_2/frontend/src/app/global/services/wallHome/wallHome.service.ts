import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class WallHomeService{

    private hostURI: string;

    constructor(private http: HttpClient){
        this.hostURI = environment.host;
    }
}