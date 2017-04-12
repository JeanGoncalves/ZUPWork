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
const router_1 = require("@angular/router");
const shot_service_1 = require("./shot.service");
const shot_model_1 = require("./shot.model");
let ShotDetailComponent = class ShotDetailComponent {
    constructor(shotService, route) {
        this.shotService = shotService;
        this.route = route;
    }
    ngOnInit() {
        this.shot = new shot_model_1.Shot(0, '', '', {}, {}, {}, 0, 0, 0);
        this.route.params.forEach((params) => {
            let id = +params['id'];
            this.shotService.getShot(id)
                .then((shot) => {
                this.shot = shot;
            });
        });
    }
};
ShotDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'shot-detail',
        templateUrl: './shot-detail.component.html'
    }),
    __metadata("design:paramtypes", [shot_service_1.ShotService,
        router_1.ActivatedRoute])
], ShotDetailComponent);
exports.ShotDetailComponent = ShotDetailComponent;
//# sourceMappingURL=shot-detail.component.js.map