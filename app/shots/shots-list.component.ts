import { Component, OnInit } from '@angular/core';

import { ShotService } from "./shot.service";
import { ShotItemComponent } from "./shot-item.component";

@Component({
    moduleId: module.id,
    selector: 'shots-list',
    templateUrl: 'shots-list.component.html'
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