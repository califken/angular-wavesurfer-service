import { Component, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { AngularWavesurferService } from './angular-wavesurfer.service';
import { AngularWavesurferServiceOptions } from './angular-wavesurfer-service-options';

@Component({
  selector: 'wavesurfer',
  templateUrl: './angular-wavesurfer-service.component.html',

  providers: [AngularWavesurferService]
})
export class AngularWavesurferServiceComponent implements AfterViewInit, OnDestroy {
  @Input() trackurl: string;
  @Input() wavesurferOptions?: AngularWavesurferServiceOptions;

  constructor(public ws: AngularWavesurferService) {}

  ngAfterViewInit() {
    this.ws.load(this.trackurl, this.wavesurferOptions);
  }

  ngOnDestroy() {
    this.ws.destroy();
  }
}
