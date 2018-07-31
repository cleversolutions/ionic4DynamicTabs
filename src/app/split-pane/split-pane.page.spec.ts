import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitPanePage } from './split-pane.page';

describe('SplitPanePage', () => {
  let component: SplitPanePage;
  let fixture: ComponentFixture<SplitPanePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitPanePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitPanePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
