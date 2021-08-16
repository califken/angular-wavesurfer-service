import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WstestComponent } from './wstest.component';

describe('WstestComponent', () => {
  let component: WstestComponent;
  let fixture: ComponentFixture<WstestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WstestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WstestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
