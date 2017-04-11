import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'shot-item',
    templateUrl: './shot-item.component.html'
})
export class ShotItemComponent implements OnInit {

    @Input() shotItem: {};
    
    constructor() { }

    ngOnInit() { }
}