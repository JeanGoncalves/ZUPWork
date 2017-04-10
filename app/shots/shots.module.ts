import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { ShotsListComponent } from './shots-list.component';

@NgModule({
    imports: [
        FormsModule
    ],
    declarations: [
        ShotsListComponent
    ],
    exports: [ 
        ShotsListComponent
    ]
})
export class ShotsModule {}