import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'shots-list',
    templateUrl: 'shots-list.component.html'
})
export class ShotsListComponent implements OnInit {
    constructor() { }

    ngOnInit() {
    }

    getListClass(): {} {
        return {
            'row': true,
            'col-sm-4': true
        };
    }
}