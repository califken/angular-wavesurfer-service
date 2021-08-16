import { Injectable } from '@angular/core';
import WaveSurfer from 'wavesurfer.js';
import { GlobalMediaControlService } from './angular-wavesurfer-service-global-media-control.service';
import { AngularWavesurferServiceOptions } from './angular-wavesurfer-service-options';

@Injectable({
  providedIn: 'root'
})
export class AngularWavesurferService {
  wsOptions;
  wavesurferOptions: AngularWavesurferServiceOptions;
  public wave: WaveSurfer = null;

  thisuuid = this.generateUUID();

  waves = {};

  constructor(public gmcs: GlobalMediaControlService) {

  }
  load(trackurl: string, wavesurferOptions?: AngularWavesurferServiceOptions) {
    if (wavesurferOptions && wavesurferOptions.container) {
      this.thisuuid = wavesurferOptions.container;
    }
    Promise.resolve(null).then(() => {
      this.wsOptions = {
        container: `#${this.thisuuid}`,
        backgroundColor: 'transparent',
        cursorColor: 'rgba(0,255,255,.9)',
        cursorWidth: 5,
        progressColor: 'rgba(0,0,0,.9)',
        waveColor: 'rgba(0,0,0,.5)',
        autoCenter: true,
        normalize: true,
        scrollParent: false,
        backend: 'WebAudio',
        responsive: true,
        maxCanvasWidth: 100,
        hideScrollbar: true,
        height: 100,
        closeAudioContext: true
      };
      this.waves[this.thisuuid] = WaveSurfer.create({
        ...this.wsOptions,
        ...wavesurferOptions
      });
      this.waves[this.thisuuid].load(trackurl);
      this.gmcs.playbackCommand$.subscribe(cmd => {
        try {
          if (this.waves[this.thisuuid] && this.waves[this.thisuuid].isPlaying()) {
            this.waves[this.thisuuid].stop();
          }
        } catch (error) {}
      });
    });
  }
  public play() {
    try {
      if (this.waves[this.thisuuid] && this.waves[this.thisuuid].isPlaying()) {
        this.gmcs.stopAll();
      } else {
        this.gmcs.stopAll();
        this.waves[this.thisuuid].playPause();
      }
    } catch (error) {}
  }

  generateUUID() {
    var firstPart = (Math.random() * 46656) | 0;
    var secondPart = (Math.random() * 46656) | 0;
    var firstPartx = ('000' + firstPart.toString(36)).slice(-3);
    var secondPartx = ('000' + secondPart.toString(36)).slice(-3);
    return 'ws' + firstPartx + secondPartx;
  }

  public destroy() {
    this.waves[this.thisuuid].destroy();
  }
}
