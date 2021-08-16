layout: page
title: "Installation"
permalink: /installation/

## Installation

Use your favorite package manager / [npm](https://www.npmjs.com/package/npm) to install.

```bash
npm install angular-wavesurfer-service --save
```
Add AngularWavesurferServiceModule to your NgModule.
```import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularWavesurferServiceModule } from 'angular-wavesurfer-service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularWavesurferServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

You will need to add the following compiler option to your application's tsconfig.json file:
```"allowSyntheticDefaultImports": true```
