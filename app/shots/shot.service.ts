import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ShotService {

    private dribbbleUrl = 'https://api.dribbble.com/v1/shots/';
    private headers: Headers = new Headers({
        'Authorization': 'Bearer 5d5a565f99a7b7ebba36b503c53f529c034accecaec6881fbb7683a53bf61d71'
    });

    constructor(
        private http: Http
    ) {}
    
    findAll(): Promise<any> {
        return this.http.get(this.dribbbleUrl,{headers: this.headers})
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    find(input: string): Promise<any> {
        return this.http.get(this.dribbbleUrl, {headers: this.headers})
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    getMore(page: number): Promise<any> {
        return this.http.get(this.dribbbleUrl,{headers: this.headers, params: 'page=' + page + '&per_page=12'})
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    getShot(id: number): Promise<any> {
        return this.http.get(this.dribbbleUrl + id, {headers: this.headers})
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    private handleError(err: any): Promise<any> {
        return Promise.reject(err.message || err);
    }
}