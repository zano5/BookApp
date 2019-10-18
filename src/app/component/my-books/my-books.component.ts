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

  image;

  book = {

    key: '',
    name: '',
    isbn: 0,
    pubDate: '',
    author: '',
    description: '',
    department: '',
    price: 0,
    status: '',
    studentNo:  0,
    url: '',
    course: ''


  };


  event;

  bookList;

  student;



  constructor(private addBookService: AddBookService,  private userDao: UserService ) {

    this.student = this.userDao.getStudent();



    this.addBookService.getMyBooks(this.student[0]).subscribe(data => {

      this.bookList =  data.map( e => {





        return{
          key: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Book;





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

    this.book.studentNo = this.student[0].studentNo;
    this.book.status = 'pending';
    this.uploadProgress =  this.addBookService.uploadBookImage(this.event, this.book);

  }


  update(book) {

    this.book = book;

  }

  updateBook() {
    this.addBookService.updateBook(this.book);
  }


  deleteBook() {
    this.addBookService.deleteBook(this.book);
  }












}
