import { Component, OnInit, Input } from '@angular/core';

import { ShotService } from "./shot.service";
import { ShotItemComponent } from "./shot-item.component";

import { Subject } from "rxjs/Subject";

@Component({
    moduleId: module.id,
    selector: 'shots-list',
    templateUrl: 'shots-list.component.html'
})
export class ShotsListComponent implements OnInit {

    @Input() searchAny: string;

    shots: {};
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

    modalClass = {
        'modal': true,
        'is-active': false
    }

    constructor(
        private shotService: ShotService
    ) { }

    /**
     * Method for initialize the component
     */
    ngOnInit() {
        this.shotService.findAll()
            .then((shots: Object) => {
                this.shots = shots;
            });
    }

    /**
     * Method for button get more shots in list
     * @author Jean Gonçalves
     */
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

    /**
     * The route for search is not implement in Dribbble or not available
     * @param Object 
     * @author Jean Gonçalves
     */
    /* search(input): void {
        this.shotService.find(input.value)
            .then((shots: Object) => {
                this.shots = shots;
            })
            .catch(err => console.log('catch', err));
    } */

    /**
     * Method for Opem modal :)
     * @type any Html Element for search
     * @author Jean Gonçalves
     */
    search(input: any) : void {
        this.searchAny = input.value;
        this.modalClass['is-active'] = true;
    } 

    /**
     * Method for button change size shots
     * @type boolean 
     * @author Jean Gonçalves
     */
    changeSize(size: boolean): void {
        this.columnClass['is-one-quarter'] = !size;
        this.columnClass['is-one-third'] = size;
    }

    /**
     * Close Modal
     * @author Jean Gonçalves
     */
    closeModal(): void {
        this.modalClass['is-active'] = false;
    }
}