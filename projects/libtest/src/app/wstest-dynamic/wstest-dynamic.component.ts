import { Component, AfterViewInit, Input } from '@angular/core';
import { AngularWavesurferService } from 'angular-wavesurfer-service';

@Component({
  selector: 'app-wstest-dynamic',
  templateUrl: './wstest-dynamic.component.html',
  styleUrls: ['./wstest-dynamic.component.scss']
})
export class WstestDynamicomponent implements AfterViewInit {
  @Input() mp3file: string;
  constructor(public wsservice: AngularWavesurferService) {}

  ngAfterViewInit(): void {
    this.wsservice.load(this.mp3file, {container: '#myid'});
  }


  ngOnDestroy() {
    this.wsservice.destroy();
  }
}
