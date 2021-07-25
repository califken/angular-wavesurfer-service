import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalMediaControlService {
  public playbackCommandSrc = new BehaviorSubject<string>('stop');
  public playbackCommand$ = this.playbackCommandSrc.asObservable();

  constructor() {
    this.playbackCommand$.subscribe(console.log);
    this.stopAll();
  }

  stopAll() {
    this.playbackCommandSrc.next('stop');
  }
}
