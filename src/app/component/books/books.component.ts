import { CartService } from './../../service/cart.service';
import { AdminStudentService } from 'src/app/service/admin-student.service';
import { AddBookService } from './../../service/add-book.service';
import { Component, OnInit } from '@angular/core';
import { async } from 'q';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { prepareEventListenerParameters } from '@angular/compiler/src/render3/view/template';

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

  type = 'admin';

  studentList = [];

  profile = {
    contact: '',
    studentNo: ''
  };

  profileUser = [];

  // tslint:disable-next-line:max-line-length
  constructor(private bookDao: AddBookService, private router: Router, private  studentService: AdminStudentService, private userDao: UserService, private cartDao: CartService) {

    this.profileUser = this.userDao.getStudent();
    this.bookArryList = [];
    this.getBookByType(this.type);








   }


  ngOnInit() {




  }


  getImage(image) {


     return this.bookDao.retreiveImage(image);


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


  search() {



    if (this.bookName !== '') {

      this.router.navigate(['/search'], { queryParams: { search: this.bookName } });

    } else {

      alert('Please Enter Book Name In Input');
    }
  }








  getBookByType(type){


if(type != "admin"){


    this.bookDao.getByTypeBooks(this.type).subscribe(data =>{


      this.bookArryList = data.map(e =>{

        let object = e.payload.doc.data() as Book;

        return{

          key: e.payload.doc.id,
          downloadUrl:  this.getImage(object.url),
          ...e.payload.doc.data() as Book
        } as Book
      })


      console.log('BookList', this.bookArryList)

    })

  }else{

    this.bookDao.getAllBooks().subscribe(data =>{


      this.bookArryList = data.map(e =>{

        let object = e.payload.doc.data() as Book;

        return{

          key: e.payload.doc.id,
          downloadUrl:  this.getImage(object.url),
          ...e.payload.doc.data() as Book
        } as Book
      })


      console.log('BookList', this.bookArryList)

    })


  }

  }


  clickStudent(){

    this.type ="student";
    this.getBookByType(this.type);



  }



  clickTeacher(){

    this.type ="teacher";
    this.getBookByType(this.type);



  }


  addToCart(book){


    this.cartDao.addToCart(book);
    console.log(book);





    console.log("cart list", this.cartDao.getCart());


    alert("Item Added To Cart");



  }


  clickAdmin(){


    this.type ="admin";
    this.getBookByType(this.type);

  }


  goContent(){

    this.router.navigateByUrl("content");
  }











}
