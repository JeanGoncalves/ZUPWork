import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'not-found',
    templateUrl: './not-found.component.html'
})
export class NotFoundComponent implements OnInit {
    constructor(
        private location: Location
    ) { }

    ngOnInit() { }

    goBack(): void {
        this.location.back();
    }
}