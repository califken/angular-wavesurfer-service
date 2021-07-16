import { Component, AfterViewInit } from '@angular/core';
import { AngularWavesurferService } from 'angular-wavesurfer-service';

@Component({
  selector: 'app-wstest',
  templateUrl: './wstest.component.html',
  styleUrls: ['./wstest.component.scss']
})
export class WstestComponent implements AfterViewInit {

  constructor(public wsservice: AngularWavesurferService) {}

  ngAfterViewInit(): void {
    this.wsservice.load('https://www.kennethcaple.com/api/mp3/richinlovemutedguitarechoing.mp3', {container: '#myid'});
  }


  ngOnDestroy() {
    this.wsservice.destroy();
  }
}
