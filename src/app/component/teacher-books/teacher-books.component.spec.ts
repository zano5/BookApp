import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherBooksComponent } from './teacher-books.component';

describe('TeacherBooksComponent', () => {
  let component: TeacherBooksComponent;
  let fixture: ComponentFixture<TeacherBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
