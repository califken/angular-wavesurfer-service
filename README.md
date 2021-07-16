# Angular Wavesurfer Service

This library provides wavesurfer.js as an Angular service and component.

Wavesurfer.js is a customizable audio waveform visualization, built on top of Web Audio API and HTML5 Canvas.  With wavesurfer.js you can create anything from an HTML5 audio player to a sophisticated DJ application.

## Demo

Try this out on [stackblitz](https://stackblitz.com/edit/angular-wavesurfer-service?file=src/app/app.component.ts)

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

## Usage

### Wavesurfer Component
Once installed, you can use the included <b>wavesurfer</b> click-to-play component anywhere in your app.  It requires a URL to an audio file.  Be sure to add the single quotes within the double quotes, if the track URL is not bound to a variable.
```
<wavesurfer [trackurl]="'https://www.kennethcaple.com/api/mp3/richinlovemutedguitarechoing.mp3'"></wavesurfer>
```
### Wavesurfer Options
You can pass an options object to the Wavesurfer component to adjust parameters of the player.  See [Wavesurfer Options](https://wavesurfer-js.org/docs/options.html) on the Wavesurfer site for a more detailed explanation of each option.

This service currently supports the following options:

    container: string
    backgroundColor: string
    cursorColor: string
    progressColor: string
    waveColor: string
    backend: string
    barGap: number
    barHeight: number
    barMinHeight: number
    barRadius: number
    barWidth: number
    autoCenter: boolean
    hideScrollbar: boolean
    height: number
    interact: boolean
    loopSelection: boolean
    mediaControls: boolean
    normalize: boolean
    partialRender: boolean
    removeMediaElementOnDestroy: boolean
    scrollParent: boolean
    splitChannels: boolean
    splitChannelsOptionsoverlay: boolean
    splitChannelsOptionsrelativeNormalization: boolean
    responsive: boolean
    skipLength: number
    maxCanvasWidth: number
    minPxPerSec: number
    pixelRatio: number
    fillParent: boolean
    cursorWidth: number
    audioRate: number

Example

```
<wavesurfer [trackurl]="'https://www.kennethcaple.com/api/mp3/richinlovemutedguitarechoing.mp3'" [wavesurferOptions]="{backgroundColor: 'black',waveColor:'red'}"></wavesurfer>
```

### Wavesurfer Service

Import the Wavesurfer Service directly into your own components to be able to designate other elements as the playback controller.

In your component: 

#### HTML 
Give a unique ID to an element and call the Wavesurfer Service's play function as the handler for an event, such as a click on a button.
``` 
<button  (click)="wsservice.play()">Play</button>
<div id="myid"></div>
```
#### Component
Inject the Wavesurfer Service into your component, and in the AfterViewInit lifecycle method, load your audio file and pass the options object to the load function, specifying the element ID for the container in which Wavesurfer should render.
```
import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { AngularWavesurferService } from 'angular-wavesurfer-service';

@Component({
  selector: 'app-wstest',
  templateUrl: './wstest.component.html',
  styleUrls: ['./wstest.component.scss']
})
export class WstestComponent implements AfterViewInit, OnDestroy {

  constructor(public wsservice: AngularWavesurferService) {}

  ngAfterViewInit(): void {
    this.wsservice.load('https://www.kennethcaple.com/api/mp3/richinlovemutedguitarechoing.mp3', {container: '#myid'});
  }
}
```

## Features
### Click to Play
All rendered waveforms are click-to-play.
### Global Media Control Service
When playing any waveform rendererd with this service, all other players instantiated by this service will stop.  This is made possible by an included Globa Media Control Service RXJS behavior subject that the components listen to for notification to stop when another player is going to play.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

# License
This work is licensed under a [BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause).
