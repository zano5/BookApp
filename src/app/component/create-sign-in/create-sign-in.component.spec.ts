import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSignInComponent } from './create-sign-in.component';

describe('CreateSignInComponent', () => {
  let component: CreateSignInComponent;
  let fixture: ComponentFixture<CreateSignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSignInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
