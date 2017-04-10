import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from './app.component';
import { ShotsModule } from "./shots/shots.module";

@NgModule({
    imports: [
        BrowserModule,
        ShotsModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}