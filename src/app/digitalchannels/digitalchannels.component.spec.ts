import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalchannelsComponent } from './digitalchannels.component';

describe('DigitalchannelsComponent', () => {
  let component: DigitalchannelsComponent;
  let fixture: ComponentFixture<DigitalchannelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalchannelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalchannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
