import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testlib2Component } from './testlib2.component';

describe('Testlib2Component', () => {
  let component: Testlib2Component;
  let fixture: ComponentFixture<Testlib2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Testlib2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Testlib2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
