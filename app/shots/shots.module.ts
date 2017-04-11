import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { ShotsListComponent } from './shots-list.component';
import { ShotItemComponent } from './shot-item.component';
import { ShotService } from './shot.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
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