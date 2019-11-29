import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrospectiveComponent } from './retrospective.component';

describe('RetrospectiveComponent', () => {
  let component: RetrospectiveComponent;
  let fixture: ComponentFixture<RetrospectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetrospectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrospectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
