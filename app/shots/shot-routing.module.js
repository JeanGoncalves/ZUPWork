"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const shots_list_component_1 = require("./shots-list.component");
const shot_detail_component_1 = require("./shot-detail.component");
const not_found_component_1 = require("./../not-found.component");
const shotRoutes = [
    {
        path: 'shots',
        component: shots_list_component_1.ShotsListComponent
    },
    {
        path: 'shots/:id',
        component: shot_detail_component_1.ShotDetailComponent
    },
    {
        path: '**',
        component: not_found_component_1.NotFoundComponent
    }
];
let ShotRoutingModule = class ShotRoutingModule {
};
ShotRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(shotRoutes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], ShotRoutingModule);
exports.ShotRoutingModule = ShotRoutingModule;
//# sourceMappingURL=shot-routing.module.js.map