"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const shots_list_component_1 = require("./shots-list.component");
let ShotsModule = class ShotsModule {
};
ShotsModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.FormsModule
        ],
        declarations: [
            shots_list_component_1.ShotsListComponent
        ],
        exports: [
            shots_list_component_1.ShotsListComponent
        ]
    })
], ShotsModule);
exports.ShotsModule = ShotsModule;
//# sourceMappingURL=shots.module.js.map