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
const shot_service_1 = require("./shot.service");
let ShotsListComponent = class ShotsListComponent {
    constructor(shotService) {
        this.shotService = shotService;
        this.find = '';
        this.page = 1;
        this.btnMoreClass = {
            'button': true,
            'is-success': true,
            'is-loading': false
        };
        this.columnClass = {
            'column': true,
            'is-one-quarter': true,
            'is-one-third': false
        };
    }
    ngOnInit() {
        this.shotService.findAll()
            .then((shots) => {
            this.shots = shots;
        });
    }
    getListClass() {
        return {
            'row': true,
            'col-sm-4': true
        };
    }
    getMore() {
        this.page++;
        this.btnMoreClass['is-loading'] = true;
        this.shotService.getMore(this.page)
            .then((shots) => {
            var resp = Array().concat(this.shots);
            this.shots = resp.concat(shots);
            this.btnMoreClass['is-loading'] = false;
        });
    }
    search(input) {
        this.find = input;
        this.shots = {};
        this.shotService.find(input)
            .then(shots => {
            this.shots = shots;
        });
    }
    changeSize(size) {
        if (size) {
            this.columnClass['is-one-quarter'] = false;
            this.columnClass['is-one-third'] = true;
        }
        else {
            this.columnClass['is-one-quarter'] = true;
            this.columnClass['is-one-third'] = false;
        }
    }
};
ShotsListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'shots-list',
        templateUrl: 'shots-list.component.html'
    }),
    __metadata("design:paramtypes", [shot_service_1.ShotService])
], ShotsListComponent);
exports.ShotsListComponent = ShotsListComponent;
//# sourceMappingURL=shots-list.component.js.map