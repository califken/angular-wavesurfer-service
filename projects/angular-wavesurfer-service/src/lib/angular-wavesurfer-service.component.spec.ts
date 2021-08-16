import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularWavesurferServiceComponent } from './angular-wavesurfer-service.component';

describe('AngularWavesurferServiceComponent', () => {
  let component: AngularWavesurferServiceComponent;
  let fixture: ComponentFixture<AngularWavesurferServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularWavesurferServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularWavesurferServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
