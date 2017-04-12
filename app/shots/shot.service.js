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
        this.dribbbleUrl = 'https://api.dribbble.com/v1/shots/';
        this.headers = new http_1.Headers({
            'Authorization': 'Bearer 5d5a565f99a7b7ebba36b503c53f529c034accecaec6881fbb7683a53bf61d71'
        });
    }
    findAll() {
        return this.http.get(this.dribbbleUrl, { headers: this.headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    find(input) {
        return this.http.get(this.dribbbleUrl, { headers: this.headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    getMore(page) {
        return this.http.get(this.dribbbleUrl, { headers: this.headers, params: 'page=' + page + '&per_page=12' })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    getShot(id) {
        return this.http.get(this.dribbbleUrl + id, { headers: this.headers })
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
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