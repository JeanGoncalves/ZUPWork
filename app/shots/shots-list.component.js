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
    }
    ngOnInit() {
        this.shotService.findAll()
            .then(shots => {
            this.shots = shots;
        });
    }
    getListClass() {
        return {
            'row': true,
            'col-sm-4': true
        };
    }
};
ShotsListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'shots-list',
        templateUrl: 'shots-list.component.html',
        outputs: ['shots']
    }),
    __metadata("design:paramtypes", [shot_service_1.ShotService])
], ShotsListComponent);
exports.ShotsListComponent = ShotsListComponent;
//# sourceMappingURL=shots-list.component.js.map