import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from '@angular/common';

import { ShotService } from "./shot.service";

@Component({
    moduleId: module.id,
    selector: 'shot-detail',
    templateUrl: './shot-detail.component.html'
})
export class ShotDetailComponent implements OnInit {

    shot: {};
    
    constructor(
        private shotService: ShotService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {

        this.route.params.forEach((params: Params) => {
            let id: number = +params['id'];

            this.shotService.getShot(id)
                .then(response => {
                    this.shot = response;
                    console.log(response);
                });

        })
        
    }
}