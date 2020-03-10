import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { U1Component } from './u1.component';

describe('U1Component', () => {
  let component: U1Component;
  let fixture: ComponentFixture<U1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ U1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(U1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
