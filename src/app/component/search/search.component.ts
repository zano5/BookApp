import { CartService } from './../../service/cart.service';
import { AdminStudentService } from './../../service/admin-student.service';
import { UserService } from 'src/app/service/user.service';
import { AddBookService } from './../../service/add-book.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  image;
  data;
  bookList = [];
  bookArryList = [];
  bookItem;

  student;

  stud;
  profile = {
    studentNo: '',
    contact: ''
  };


  studentList;
  profileUser;
  // tslint:disable-next-line:max-line-length
  constructor(private route: ActivatedRoute, private router: Router, private addBookService: AddBookService, private studentInfo: UserService, private studentService: AdminStudentService, private cartDao: CartService) {



  }

  ngOnInit() {
    this.profileUser = this.studentInfo.getStudent();


    if (this.studentInfo.getStudent()) {

    this.student = this.studentInfo.getStudent()[0];

    console.log(this.student);

    }


    this.route.queryParams.subscribe(params => {



        this.data = params.search;


    });



    console.log(this.data);
    this.addBookService.getBooksSearch(this.data).subscribe(data => {


      this.bookList = data.map( e => {
        return{
          key: e.payload.doc.id,
          ...e.payload.doc.data() as Book
        } as Book;

      });


      for (const book of this.bookList) {

        book.url =  this.getImage(book.url);
        this.bookArryList.push(book);
    }

      console.log('BookList', this.bookArryList);
    });



  }

  close() {

    if (this.stud !== '') {


      this.router.navigateByUrl('detail-menu/books');
      this.bookArryList = [];
      this.bookList = [];
    } else {

      this.bookArryList = [];
      this.bookList = [];

      this.router.navigateByUrl('/signIn');

      alert('Login In To View!');
    }



  }

  getImage(image) {

    return this.addBookService.retreiveImage(image);
 }


 collectBook(book) {

  this.bookItem = book;

  this.studentService.getStudent().subscribe( data => {

    this.studentList = data.map(e => {


      return{

        key: e.payload.doc.id,
        ... e.payload.doc.data() as Student

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



reserve(bookItem) {

  console.log(bookItem);

  if (this.profileUser[0].studentNo === '') {

    alert('Session Timed Out! Relogin to System');

  } else {

    bookItem.reserved = 'yes';
    bookItem.reservedBy = this.profileUser[0].studentNo;
    console.log(bookItem.key);

    this.addBookService.reserveBook(bookItem);

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
    this.addBookService.cancelReserve(bookItem);

    this.bookArryList = [];
    } else {
      alert('You are unable to cancel book reservation!');
    }

  }

}


addToCart(book){
  this.cartDao.addToCart(book);
  console.log(book);
  console.log("cart list", this.cartDao.getCart())
  alert("Item Added To Cart");

}

}
