import { Component, OnInit } from '@angular/core';

import { ShotService } from "./shot.service";
import { ShotItemComponent } from "./shot-item.component";

@Component({
    moduleId: module.id,
    selector: 'shots-list',
    templateUrl: 'shots-list.component.html'
})
export class ShotsListComponent implements OnInit {

    shots: Object;
    find: string = '';
    page: number = 1;
    btnMoreClass: Object = {
        'button': true,
        'is-success': true,
        'is-loading': false
    };

    columnClass = {
        'column': true,
        'is-one-quarter': true,
        'is-one-third': false
    };

    constructor(
        private shotService: ShotService
    ) { }

    ngOnInit() {
        this.shotService.findAll()
            .then((shots: Object) => {
                this.shots = shots;
            });
    }

    getListClass(): {} {
        return {
            'row': true,
            'col-sm-4': true
        };
    }

    getMore(): void {
        this.page++;
        this.btnMoreClass['is-loading'] = true;
        this.shotService.getMore(this.page)
            .then((shots: Object) => {
                var resp = Array().concat(this.shots);
                this.shots = resp.concat(shots);
                this.btnMoreClass['is-loading'] = false;
            });
    }

    search(input: string): void {
        this.find = input;
        this.shots = {};
        this.shotService.find(input)
            .then(shots => {
                this.shots = shots;
            });
    }

    changeSize(size: string): void {
        if (size) {
            this.columnClass['is-one-quarter'] = false;
            this.columnClass['is-one-third'] = true;
        } else {
            this.columnClass['is-one-quarter'] = true;
            this.columnClass['is-one-third'] = false;
        }
    }
}