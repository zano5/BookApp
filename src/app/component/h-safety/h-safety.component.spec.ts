import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HSafetyComponent } from './h-safety.component';

describe('HSafetyComponent', () => {
  let component: HSafetyComponent;
  let fixture: ComponentFixture<HSafetyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HSafetyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HSafetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
