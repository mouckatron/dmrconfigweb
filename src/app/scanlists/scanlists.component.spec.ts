import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanlistsComponent } from './scanlists.component';

describe('ScanlistsComponent', () => {
  let component: ScanlistsComponent;
  let fixture: ComponentFixture<ScanlistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScanlistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanlistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
