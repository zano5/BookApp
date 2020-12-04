import { LoginDAOService } from './../../service/login-dao.service';
import { TeacherService } from './../../service/teacher.service';
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


  student;

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


  teacher = {} as Teacher;

  profileUser = [];

  // tslint:disable-next-line:max-line-length
  constructor(private bookDao: AddBookService, private router: Router, private  studentService: AdminStudentService, private userDao: UserService, private cartDao: CartService, private teacherDao: TeacherService, private loginDao: LoginDAOService) {

    this.profileUser = this.userDao.getStudent();
    this.bookArryList = [];
    this.getBookByType(this.type);



    if (this.userDao.getStudent()) {

    console.log('user Okay');


     } else {


      this.router.navigateByUrl('signIn');

     }





   }


  ngOnInit() {




  }


  getImage(image) {


     return this.bookDao.retreiveImage(image);


  }



  collectBook(book) {

    this.bookItem = book;

    if((this.bookItem.employeeNumber != null) ){


      this.teacherDao.getTeacherByEmployeeNumber(book.employeeNumber).subscribe(data => {


        data.map(e => {



          this.teacher = e.payload.doc.data() as Teacher;
          this.teacher.key =e.payload.doc.id;

          return this.teacher;



        })


      })





    }


    if((this.bookItem.studentNo != null)){

      console.log('student book', this.bookItem.studentNo);

      this.loginDao.userLogin(this.bookItem).subscribe(data => {


        console.log(data);
        data.map(e=> {



          this.student = e.payload.doc.data()
         return  this.student.key = e.payload.doc.id;
        })


      })




    }





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
