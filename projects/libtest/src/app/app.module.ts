import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularWavesurferServiceModule } from 'projects/angular-wavesurfer-service/src/public-api';
import { WstestComponent } from './wstest/wstest.component';
import { WstestDynamicomponent } from './wstest-dynamic/wstest-dynamic.component';
@NgModule({
  declarations: [
    AppComponent,
    WstestComponent,
    WstestDynamicomponent
  ],
  imports: [
    BrowserModule,
    AngularWavesurferServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
