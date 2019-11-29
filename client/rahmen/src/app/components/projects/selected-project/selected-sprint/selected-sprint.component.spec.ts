import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedSprintComponent } from './selected-sprint.component';

describe('SelectedSprintComponent', () => {
  let component: SelectedSprintComponent;
  let fixture: ComponentFixture<SelectedSprintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedSprintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedSprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
