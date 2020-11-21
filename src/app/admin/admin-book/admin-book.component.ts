import { AddBookService } from './../../service/add-book.service';
import { Component, OnInit } from '@angular/core';
import { AdminCourseService } from 'src/app/service/admin-course.service';
import { AdminSpecializationService } from 'src/app/service/admin-specialization.service';

@Component({
  selector: 'app-admin-book',
  templateUrl: './admin-book.component.html',
  styleUrls: ['./admin-book.component.scss']
})
export class AdminBookComponent implements OnInit {

  courseList =[]
  bookList = [];
  book = {} as Book;
  student = {} as Student;
  specializationList =[];
  course;
  uploadProgress;
  booksList = [];
  event;
  specialList = [];
  specialization;

  constructor(private courseService: AdminCourseService, private specialService: AdminSpecializationService, private bookDao: AddBookService) { }

  ngOnInit() {


    this.getCourseSpecialization();
    this. getAdminBooks();
  }


  upload(event) {

    this.event = event;

    console.log(event);

  }





  deleteBook(){

    this.bookDao.deleteBook(this.book);

  }
  update(book) {

    this.book = book;
  }


  updateBook(){


    this.bookDao.updateBook(this.book);


  }




  getCourseSpecialization(){



    this.specialService.getSpecialization().subscribe(data => {


      this.specializationList = data.map(e => {


        return{
          key: e.payload.doc.id,
          ...e.payload.doc.data() as Specialization
        } as Specialization;

      });

    });



    this.courseService.getCourse().subscribe(data => {


      this.courseList = data.map(e => {

        return{
            key: e.payload.doc.id,
            ...e.payload.doc.data() as Course
        } as Course;


      });

  });



  }


  addBook() {

    this.book.specialization = this.specialization;
    this.book.course = this.course;
    this.book.type ='admin';
    this.uploadProgress =  this.bookDao.uploadBookImage(this.event, this.book);

  }


  getAdminBooks() {


    this.bookDao.getByTypeBooks('admin').subscribe(data => {

      this.bookList = data.map(e => {


        return{

          key: e.payload.doc.id,
          ...e.payload.doc.data() as Book
        } as Book;
      })
    })




  }

}
