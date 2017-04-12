import { Component, EventEmitter, OnInit, Input, Output, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

import { ShotService } from "./shot.service";
import { ShotItemComponent } from "./shot-item.component";

import { Subject } from "rxjs/Subject";

@Component({
    moduleId: module.id,
    selector: 'shots-list',
    templateUrl: 'shots-list.component.html'
})
export class ShotsListComponent implements OnInit, OnChanges {

    @Input() busca: string;
    @Output() buscaChange: EventEmitter<string> = new EventEmitter<string>();
    private termosDaBusca: Subject<string> = new Subject<string>();

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

    constructor(
        private shotService: ShotService
    ) { }

    ngOnInit() {
        this.shotService.findAll()
            .then((shots: Object) => {
                this.shots = shots;
            });
    }

    ngOnChanges(changes: SimpleChanges): void {
        let busca: SimpleChange = changes['busca'];
        this.search(busca.currentValue);
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

    search(term: string): void {
        this.termosDaBusca.next(term);
        this.buscaChange.emit(term);
    }

    changeSize(size: string): void {
        this.columnClass['is-one-quarter'] = Boolean(!size);
        this.columnClass['is-one-third'] = Boolean(size);
    }
}