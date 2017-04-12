import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

import { ShotService } from "./shot.service";
import { Shot } from "./shot.model";

@Component({
    moduleId: module.id,
    selector: 'shot-detail',
    templateUrl: './shot-detail.component.html'
})
export class ShotDetailComponent implements OnInit {

    shot: Shot;
    
    constructor(
        private shotService: ShotService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.shot = new Shot(0, '', '', {}, {}, {}, 0, 0, 0);

        this.route.params.forEach((params: Params) => {
            let id: number = +params['id'];

            this.shotService.getShot(id)
                .then((shot: Shot) => {
                    this.shot = shot;
                });

        })
        
    }
}