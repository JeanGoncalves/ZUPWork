import { Component, OnInit } from '@angular/core';

import { ShotService } from "./shot.service";

@Component({
    moduleId: module.id,
    selector: 'shots-list',
    templateUrl: 'shots-list.component.html',
    outputs: ['shots']
})
export class ShotsListComponent implements OnInit {

    shots: {};

    constructor(
        private shotService: ShotService
    ) { }

    ngOnInit() {
        this.shotService.findAll()
            .then(shots => {
                this.shots = shots;
            });
    }

    getListClass(): {} {
        return {
            'row': true,
            'col-sm-4': true
        };
    }
}