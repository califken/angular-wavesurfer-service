import { Component } from '@angular/core';
import { BehaviorSubject } from 'projects/angular-wavesurfer-service/node_modules/rxjs';
import { AngularWavesurferServiceOptions } from 'projects/angular-wavesurfer-service/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'libtest';

  mp3List: string[] = [];

  public mp3sSrc = new BehaviorSubject([]);
  mp3s$ = this.mp3sSrc.asObservable();

  wavesurferOptions4: AngularWavesurferServiceOptions;
  wavesurferOptions5: AngularWavesurferServiceOptions;
  constructor() {

    this.wavesurferOptions4 = {
      backgroundColor: '#000000',
      cursorColor: '#fbff00',
      progressColor: '#555',
      waveColor: '#fbff00',
      barGap: 12,
      barHeight: 1,
      barMinHeight: 1,
      barRadius: 6,
      barWidth: 12,
      normalize: true,
      splitChannels: true,
      splitChannelsOptions: {
        overlay: true,
        relativeNormalization: true
      }
    };

    this.wavesurferOptions5 = {
      backgroundColor: '#ffffff',
      cursorColor: '#000fff',
      progressColor: '#555',
      waveColor: '#0011ff',
      barGap: 4,
      barHeight: 1,
      barMinHeight: 1,
      barWidth: 6,
      normalize: true,
      splitChannels: true,
      splitChannelsOptions: {
        overlay: true,
        relativeNormalization: true
      },
      cursorWidth: 6
    };

    this.addMp3('https://www.kennethcaple.com/api/mp3/w.mp3');
    this.addMp3('https://www.kennethcaple.com/api/mp3/w.mp3');
    this.addMp3('https://www.kennethcaple.com/api/mp3/w.mp3');
  }

  public addMp3(mp3: string) {
    this.mp3List.push(mp3);
    this.mp3sSrc.next(this.mp3List);
  }
}
