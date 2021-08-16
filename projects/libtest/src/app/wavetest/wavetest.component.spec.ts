import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WavetestComponent } from './wavetest.component';

describe('WavetestComponent', () => {
  let component: WavetestComponent;
  let fixture: ComponentFixture<WavetestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WavetestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WavetestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
