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
const Subject_1 = require("rxjs/Subject");
let ShotsListComponent = class ShotsListComponent {
    constructor(shotService) {
        this.shotService = shotService;
        this.buscaChange = new core_1.EventEmitter();
        this.termosDaBusca = new Subject_1.Subject();
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
    ngOnChanges(changes) {
        let busca = changes['busca'];
        this.search(busca.currentValue);
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
    search(term) {
        this.termosDaBusca.next(term);
        this.buscaChange.emit(term);
    }
    changeSize(size) {
        this.columnClass['is-one-quarter'] = Boolean(!size);
        this.columnClass['is-one-third'] = Boolean(size);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ShotsListComponent.prototype, "busca", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ShotsListComponent.prototype, "buscaChange", void 0);
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