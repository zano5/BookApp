import { AdminStudentService } from 'src/app/service/admin-student.service';
import { AddBookService } from './../../service/add-book.service';
import { Component, OnInit } from '@angular/core';
import { async } from 'q';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  bookList = [];

  bookArryList = [];



  image;

  bookSearch;


  bookItem;

  bookName = '';

  studentList = [];

  profile = {
    contact: '',
    studentNo: ''
  };

  profileUser = [];

  // tslint:disable-next-line:max-line-length
  constructor(private addService: AddBookService, private router: Router, private  studentService: AdminStudentService, private userDao: UserService) {

    this.profileUser = this.userDao.getStudent();
    this.bookArryList = [];

    this.addService.getBooks().subscribe(data => {

      this.bookList =  data.map( e => {





        return{
          key: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Book;





      });





      for (const book of this.bookList) {

       book.url =  this.getImage(book.url);
       this.bookArryList.push(book);


    }


    });











   }


  ngOnInit() {
  }


  getImage(image) {


     return this.addService.retreiveImage(image);


  }



  collectBook(book) {

    this.bookItem = book;

    this.studentService.getStudent().subscribe( data => {

      this.studentList = data.map(e => {


        return{

          key: e.payload.doc.id,
          ... e.payload.doc.data()

        } as Student;

      });


      for (const stud of this.studentList) {

      if ( stud.studentNo === book.studentNo) {

        this.profile.contact = stud.contact;
        this.profile.studentNo = stud.studentNo;





      } else {

        this.profile.contact = '';
        this.profile.studentNo = '';


      }

    }


    });

  }


  search() {



    if (this.bookName !== '') {

      this.router.navigate(['/search'], { queryParams: { search: this.bookName } });

    } else {

      alert('Please Enter Book Name In Input');
    }
  }


  reserve(bookItem) {

    console.log(bookItem);

    if (this.profileUser[0].studentNo === '') {

      alert('Session Timed Out! Relogin to System');

    } else {

      bookItem.reserved = 'yes';
      bookItem.reservedBy = this.profileUser[0].studentNo;
      console.log(bookItem.key);

      this.addService.reserveBook(bookItem);

      this.bookArryList = [];
    }

  }

  cancelReserve(bookItem) {

    if (this.profileUser[0].studentNo === '') {

      alert('Session Timed Out! Relogin to System');

    } else {


      if (bookItem.reservedBy === this.profileUser[0].studentNo) {

      bookItem.reserved = 'no';
      bookItem.reservedBy = '';
      console.log(this.profileUser[0].studentNo);



      this.addService.cancelReserve(bookItem);

      this.bookArryList = [];
      } else {
        alert('You are unable to cancel book reservation!');
      }

    }

  }



}
