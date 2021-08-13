import { Injectable } from '@angular/core';
import WaveSurfer from 'wavesurfer.js';
import { WaveSurferParams } from 'wavesurfer.js/types/params';

@Injectable({
  providedIn: 'root'
})
export class WaveService {
  wave: WaveSurfer = null;

  constructor() {
    console.clear();
  }

  create(options: WaveSurferParams) {
    return WaveSurfer.create(options);
  }
}
