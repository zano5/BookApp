import { AdminSpecializationService } from 'src/app/service/admin-specialization.service';
import { AdminCourseService } from 'src/app/service/admin-course.service';
import { AdminStudentService } from 'src/app/service/admin-student.service';
import { AddBookService } from './../../service/add-book.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.scss']
})
export class MyBooksComponent implements OnInit {

  uploadProgress;
  selectedFile: ImageSnippet;
  imageInput;
  reservedOption;
  specialList = [];
  courseList = [];
  specialization;
  course;

  image;

  book = {
    name: '',
    pubDate: '',
    author: '',
    description: '',
    specialization: '',
    price: 0,
    status: '',
    studentNo:  0,
    url: '',
    course: '',
    reserved: '',
    reservedBy: '',
    isbn: ''





  };

  specializationList = [];

  profile;




  event;

  bookList;

  student;

  studentList;

  profileUser =  {

    studentNo: '',
    contact: ''

  };



  // tslint:disable-next-line:max-line-length
  constructor(private addBookService: AddBookService,  private userDao: UserService, private studentService: AdminStudentService, private courseService: AdminCourseService, private specialService: AdminSpecializationService) {

    this.student = this.userDao.getStudent();



    this.addBookService.getMyBooks(this.student[0]).subscribe(data => {

      this.bookList =  data.map( e => {





        return{
          key: e.payload.doc.id,
          ...e.payload.doc.data() as Book
        } as Book;





      });








    });


    this.specialService.getSpecialization().subscribe(data => {


      this.specialList = data.map(e => {


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

  ngOnInit() {



  }


  upload(event) {

    this.event = event;

    console.log(event);

  }


  addBook() {

    this.book.specialization = this.specialization;
    this.book.course = this.course;
    this.book.studentNo = this.student[0].studentNo;
    this.book.status = 'pending';
    this.uploadProgress =  this.addBookService.uploadBookImage(this.event, this.book);

  }


  update(book) {

    this.book = book;

    this.studentService.getStudent().subscribe(data => {

      this.studentList = data.map(e => {

        return{

          key: e.payload.doc.id,
          ...e.payload.doc.data() as Student

        } as Student;

      });


      for (const student of this.studentList) {


        if (student.studentNo === book.studentNo) {

          this.profileUser.studentNo = student.studentNo;
          this.profileUser.contact = student.contact;

        }

      }


    });





  }

  updateBook() {


    this.book.specialization = this.specialization;
    this.book.course = this.course;
    if (this.book.reserved === 'no') {

      this.book.reservedBy = '';

    }


    this.addBookService.updateBook(this.book);
  }


  deleteBook() {
    this.addBookService.deleteBook(this.book);
  }












}
