import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ShotsModule } from "./shots/shots.module";

@NgModule({
    imports: [
        AppRoutingModule,
        BrowserModule,
        HttpModule,
        ShotsModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}