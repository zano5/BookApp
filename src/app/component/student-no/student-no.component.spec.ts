import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentNoComponent } from './student-no.component';

describe('StudentNoComponent', () => {
  let component: StudentNoComponent;
  let fixture: ComponentFixture<StudentNoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentNoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
