import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ShotService {

    /**
     * Number for autorization api request
     * Ps.: this is not correctly because is vulnerable, need a refactor for a security of hash
     * @author Jean Gonçalves
     */
    private headers: Headers = new Headers({
        'Authorization': 'Bearer 5d5a565f99a7b7ebba36b503c53f529c034accecaec6881fbb7683a53bf61d71'
    });

    constructor(
        private http: Http
    ) {}

    /**
     * Method for get Url complete for requision
     * @param type The type of request Dribbble api (shot or search)
     * @param id Number for shot where type parameter is 'shot'(optional)
     * @param search String for search a shot where type parameter is 'search' (optional)
     * @author Jean Gonçalves
     */
    getDribbbleUrl(type: string, id?: number, search?: string) : string {
        var url = 'https://api.dribbble.com/v1/';
        switch (type) {
            case 'shot':
                if (id) {
                    return url + 'shots/' + id;
                }
                return url + 'shots/';
            case 'search':
                return url + 'users/' + search;
        
            default:
                return url; 
        }
    }
    
    /**
     * Method for get recent 12 shots
     * @author Jean Gonçalves
     */
    findAll(): Promise<any> {
        return this.http.get(this.getDribbbleUrl('shot'), {headers: this.headers})
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    /**
     * Method for find a shot, but the route of Api is not implement or not available
     * @type string String for search a shot
     * @author Jean Gonçalves
     */
    find(search: string): Promise<any> {
        return this.http.get(this.getDribbbleUrl('search', 0, search), {headers: this.headers})
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    /**
     * Method for get more shots in the list
     * @param page Number for get a list of page
     * @author Jean Gonçalves
     */
    getMore(page: number): Promise<any> {
        return this.http.get(this.getDribbbleUrl('shot'), {headers: this.headers, params: 'page=' + page + '&per_page=12'})
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    /**
     * Mehtod for get a details of shot
     * @param id Number for shot id
     * @author Jean Gonçalves
     */
    getShot(id: number): Promise<any> {
        return this.http.get(this.getDribbbleUrl('shot', id), {headers: this.headers})
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    /**
     * Method for any error request
     * @param err Object for error
     * @author Jean Gonçalves
     */
    private handleError(err: any): Promise<any> {
        return Promise.reject(err.message || err);
    }
}