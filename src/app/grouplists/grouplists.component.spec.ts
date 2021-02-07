import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrouplistsComponent } from './grouplists.component';

describe('GrouplistsComponent', () => {
  let component: GrouplistsComponent;
  let fixture: ComponentFixture<GrouplistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrouplistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrouplistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
