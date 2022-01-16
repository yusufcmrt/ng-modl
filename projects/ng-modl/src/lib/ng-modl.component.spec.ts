import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgModlComponent } from './ng-modl.component';

describe('NgModlComponent', () => {
  let component: NgModlComponent;
  let fixture: ComponentFixture<NgModlComponent>;

  beforeEach(waitForAsync(() => {
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
