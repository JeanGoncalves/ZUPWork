"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const forms_1 = require("@angular/forms");
const shot_detail_component_1 = require("./shot-detail.component");
const shots_list_component_1 = require("./shots-list.component");
const shot_item_component_1 = require("./shot-item.component");
const shot_routing_module_1 = require("./shot-routing.module");
const shot_service_1 = require("./shot.service");
let ShotsModule = class ShotsModule {
};
ShotsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            shot_routing_module_1.ShotRoutingModule
        ],
        declarations: [
            shot_detail_component_1.ShotDetailComponent,
            shots_list_component_1.ShotsListComponent,
            shot_item_component_1.ShotItemComponent
        ],
        exports: [
            shots_list_component_1.ShotsListComponent,
            shot_item_component_1.ShotItemComponent
        ],
        providers: [
            shot_service_1.ShotService
        ]
    })
], ShotsModule);
exports.ShotsModule = ShotsModule;
//# sourceMappingURL=shots.module.js.map