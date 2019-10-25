import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NLSearchComponent } from './n-lsearch.component';

describe('NLSearchComponent', () => {
  let component: NLSearchComponent;
  let fixture: ComponentFixture<NLSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NLSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NLSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
