import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { ShotDetailComponent } from './shot-detail.component';
import { ShotsListComponent } from './shots-list.component';
import { ShotItemComponent } from './shot-item.component';
import { ShotRoutingModule } from "./shot-routing.module";
import { ShotService } from './shot.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ShotRoutingModule
    ],
    declarations: [
        ShotDetailComponent,
        ShotsListComponent,
        ShotItemComponent
    ],
    exports: [ 
        ShotsListComponent,
        ShotItemComponent
    ],
    providers: [
        ShotService
    ]
})
export class ShotsModule {}