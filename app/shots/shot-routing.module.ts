import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ShotsListComponent } from './shots-list.component';
import { ShotDetailComponent } from './shot-detail.component';
import { NotFoundComponent } from './../not-found.component';


const shotRoutes: Routes = [
    {
        path: 'shots',
        component: ShotsListComponent
    },
    {
        path: 'shots/:id',
        component: ShotDetailComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(shotRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ShotRoutingModule {}