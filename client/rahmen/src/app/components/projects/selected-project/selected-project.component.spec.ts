import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedProjectComponent } from './selected-project.component';

describe('SelectedProjectComponent', () => {
  let component: SelectedProjectComponent;
  let fixture: ComponentFixture<SelectedProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
