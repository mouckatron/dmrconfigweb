import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalogchannelsComponent } from './analogchannels.component';

describe('AnalogchannelsComponent', () => {
  let component: AnalogchannelsComponent;
  let fixture: ComponentFixture<AnalogchannelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalogchannelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalogchannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
