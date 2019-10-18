import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdimOptionsMenuComponent } from './adim-options-menu.component';

describe('AdimOptionsMenuComponent', () => {
  let component: AdimOptionsMenuComponent;
  let fixture: ComponentFixture<AdimOptionsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdimOptionsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdimOptionsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
