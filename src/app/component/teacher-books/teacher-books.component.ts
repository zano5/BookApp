import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AddBookService } from 'src/app/service/add-book.service';
import { TeacherService } from 'src/app/service/teacher.service';
import { Component, OnInit } from '@angular/core';
import { AdminSpecializationService } from 'src/app/service/admin-specialization.service';
import { AdminCourseService } from 'src/app/service/admin-course.service';
import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-teacher-books',
  templateUrl: './teacher-books.component.html',
  styleUrls: ['./teacher-books.component.scss']
})
export class TeacherBooksComponent implements OnInit {

  book = {} as TeacherBook;
  student = {} as Student;
  specializationList =[];
  courseList = [];
  course;
  bookList = [];
  specialization;


  uploadProgress;
  booksList = [];
  event;

  all$: Observable<{ courses: Course[], specializations: Specialization[]}>

  // tslint:disable-next-line:max-line-length
  constructor(private  bookDao: AddBookService, private teacherDao: TeacherService, private router: Router, private afs: AngularFirestore)  { }


  ngOnInit() {


    this.getTeacherBooks();

    this.all$ = combineLatest(

    this.afs.collection<Course>('course').valueChanges(),
    this.afs.collection<Specialization>('specialization').valueChanges()

    ).pipe(map(([courses, specializations]) => {

      return { courses, specializations}
    })
    )





  }




  upload(event) {

    this.event = event;

  }


  updateBook(event) {



  }

  addBook() {

   // this.bookDao.addTeacherBook(this.book);



   this.book.specialization = this.specialization;
   this.book.course = this.course;
   this.book.employeeNumber = this.teacherDao.getTeacher().employeeNumber;
  this.uploadProgress =  this.bookDao.uploadTeacherBook(this.event, this.book);


  console.log(this.book);

  }


  update() {

  }


  deleteBook() {

  }



  back() {

    this.router.navigateByUrl('teacher-profile');
  }


  getTeacherBooks() {


    this.bookDao.getTeacherBook(this.teacherDao.getTeacher()).subscribe(data => {


      this.booksList = data.map(e => {


        return{
          key: e.payload.doc.id,
          ...e.payload.doc.data() as TeacherBook
        } as TeacherBook;

      });

    });


  }

}
