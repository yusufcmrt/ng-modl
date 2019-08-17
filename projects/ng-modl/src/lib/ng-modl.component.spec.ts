import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModlComponent } from './ng-modl.component';

describe('NgModlComponent', () => {
  let component: NgModlComponent;
  let fixture: ComponentFixture<NgModlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgModlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgModlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
