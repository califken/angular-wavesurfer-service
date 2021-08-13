  import { AfterViewInit, Component } from '@angular/core';
  import { BehaviorSubject } from 'rxjs';
  import { AngularWavesurferServiceOptions, WaveService } from 'projects/angular-wavesurfer-service/src/public-api';

@Component({
  selector: 'app-wavetest',
  templateUrl: './wavetest.component.html',
  styleUrls: ['./wavetest.component.scss']
})
export class WavetestComponent implements AfterViewInit {

    wave = null;

  public isPlayingSrc = new BehaviorSubject<boolean>(false);
  isPlaying$ = this.isPlayingSrc.asObservable();

    // mp3List: string[] = [];

    // public mp3sSrc = new BehaviorSubject([]);
    // mp3s$ = this.mp3sSrc.asObservable();

    // wavesurferOptions4: AngularWavesurferServiceOptions;
    // wavesurferOptions5: AngularWavesurferServiceOptions;
    constructor(public waveService: WaveService) {}
    ngAfterViewInit() {
      this.wave = this.waveService.create({container: '#waveservice'});
      this.wave.load(
        'https://radiant-sands-25270.herokuapp.com/http://www.kennethcaple.com/example.mp3'
      );
      this.wave.on('ready', console.log);
      this.wave.on('play', () => this.handlePlayStateChange());
      this.wave.on('pause', () => this.handlePlayStateChange());
      this.wave.on('stop', () => this.handlePlayStateChange());
    }
    handlePlayStateChange() {
      console.log(this.wave);
      if (this.wave.isPlaying()) {
        this.isPlayingSrc.next(true)
      } else {
        this.isPlayingSrc.next(false)
      }

    }
      // this.wavesurferOptions4 = {
      //   backgroundColor: '#000000',
      //   cursorColor: '#fbff00',
      //   progressColor: '#555',
      //   waveColor: '#fbff00',
      //   barGap: 12,
      //   barHeight: 1,
      //   barMinHeight: 1,
      //   barRadius: 6,
      //   barWidth: 12,
      //   normalize: true,
      //   splitChannels: true,
      //   splitChannelsOptions: {
      //     overlay: true,
      //     relativeNormalization: true
      //   }
      // };

      // this.wavesurferOptions5 = {
      //   backgroundColor: '#ffffff',
      //   cursorColor: '#000fff',
      //   progressColor: '#555',
      //   waveColor: '#0011ff',
      //   barGap: 4,
      //   barHeight: 1,
      //   barMinHeight: 1,
      //   barWidth: 6,
      //   normalize: true,
      //   splitChannels: true,
      //   splitChannelsOptions: {
      //     overlay: true,
      //     relativeNormalization: true
      //   },
      //   cursorWidth: 6
      // };

      // this.addMp3('https://www.kennethcaple.com/api/mp3/w.mp3');
      // this.addMp3('https://www.kennethcaple.com/api/mp3/w.mp3');
      // this.addMp3('https://www.kennethcaple.com/api/mp3/w.mp3');
    // }

    // public addMp3(mp3: string) {
    //   this.mp3List.push(mp3);
    //   this.mp3sSrc.next(this.mp3List);
    // }
  }
