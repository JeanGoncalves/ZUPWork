"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
let ShotService = class ShotService {
    constructor(http) {
        this.http = http;
        /**
         * Number for autorization api request
         * Ps.: this is not correctly because is vulnerable, need a refactor for a security of hash
         * @author Jean Gonçalves
         */
        this.headers = new http_1.Headers({
            'Authorization': 'Bearer 5d5a565f99a7b7ebba36b503c53f529c034accecaec6881fbb7683a53bf61d71'
        });
    }
    /**
     * Method for get Url complete for requision
     * @param type The type of request Dribbble api (shot or search)
     * @param id Number for shot where type parameter is 'shot'(optional)
     * @param search String for search a shot where type parameter is 'search' (optional)
     * @author Jean Gonçalves
     */
    getDribbbleUrl(type, id, search) {
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
    findAll() {
        return this.http.get(this.getDribbbleUrl('shot'), { headers: this.headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    /**
     * Method for find a shot, but the route of Api is not implement or not available
     * @type string String for search a shot
     * @author Jean Gonçalves
     */
    find(search) {
        return this.http.get(this.getDribbbleUrl('search', 0, search), { headers: this.headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    /**
     * Method for get more shots in the list
     * @param page Number for get a list of page
     * @author Jean Gonçalves
     */
    getMore(page) {
        return this.http.get(this.getDribbbleUrl('shot'), { headers: this.headers, params: 'page=' + page + '&per_page=12' })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    /**
     * Mehtod for get a details of shot
     * @param id Number for shot id
     * @author Jean Gonçalves
     */
    getShot(id) {
        return this.http.get(this.getDribbbleUrl('shot', id), { headers: this.headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    /**
     * Method for any error request
     * @param err Object for error
     * @author Jean Gonçalves
     */
    handleError(err) {
        return Promise.reject(err.message || err);
    }
};
ShotService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ShotService);
exports.ShotService = ShotService;
//# sourceMappingURL=shot.service.js.map