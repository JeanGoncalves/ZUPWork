import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { NotFoundComponent } from './../not-found.component';
import { ShotDetailComponent } from './shot-detail.component';
import { ShotsListComponent } from './shots-list.component';
import { ShotItemComponent } from './shot-item.component';
import { ShotRoutingModule } from './shot-routing.module';
import { ShotService } from './shot.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ShotRoutingModule
    ],
    declarations: [
        NotFoundComponent,
        ShotDetailComponent,
        ShotsListComponent,
        ShotItemComponent
    ],
    exports: [ 
        NotFoundComponent,
        ShotsListComponent,
        ShotItemComponent
    ],
    providers: [
        ShotService
    ]
})
export class ShotsModule {}