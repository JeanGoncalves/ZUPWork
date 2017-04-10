import { NgModule } from '@angular/core';

import { ShotsListComponent } from './shots-list.component';

@NgModule({
    declarations: [
        ShotsListComponent
    ],
    exports: [ 
        ShotsListComponent
    ]
})
export class ShotsModule {}