import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'not-found',
    templateUrl: './not-found.component.html'
})
export class NotFoundComponent {

    constructor(
        private location: Location
    ) { }

    /**
     * Method for back history navigator
     * @author Jean Gonçalves
     */
    goBack(): void {
        this.location.back();
    }
}