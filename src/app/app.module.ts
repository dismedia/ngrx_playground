import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {StoreModule} from "@ngrx/store";
import {thecounterReducer} from "../store/store";
import {EffectsModule} from "@ngrx/effects";
import {SideEffects} from "../store/effects/sideEffect";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ count: thecounterReducer }),
    EffectsModule.forRoot([SideEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
