import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstaComponent } from './component/insta/insta/insta.component';
import { FbComponent } from './component/fb/fb/fb.component';
import {NgxsModule} from "@ngxs/store";
import {AppState} from "./state/app.state";
import {FbState} from "./state/fb-state/fb.state";
import {InstaState} from "./state/insta-state/insta.state";

@NgModule({
  declarations: [
    AppComponent,
    InstaComponent,
    FbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([AppState, FbState, InstaState]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
