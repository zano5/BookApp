import { AddBookService } from 'src/app/service/add-book.service';
import { ContentService } from './../../service/content.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  bookArryList = [];

  bookName;

  content = {
    email: '',
    name: '',
    message: ''
  };


  constructor(private router: Router,  private contentDao: ContentService, private bookDao: AddBookService) { }

  ngOnInit() {


    this.getBooks();

  }

  search() {


    console.log(this.bookName);



    if (this.bookName !== '') {

      this.router.navigate(['/nSearch'], { queryParams: { search: this.bookName } });

    } else {

      this.router.navigateByUrl('');

      alert('Please Enter Book Name In Input');
    }

  }

  addComment() {

    this.contentDao.addComment(this.content);
    this.content.email = '';
    this.content.name = '';
    this.content.message = '';



  }


  getBooks(){


   this.bookDao.getBooksForHome().subscribe(data => {


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

  getImage(image) {

    return this.bookDao.retreiveImage(image);
 }


 collectBook(book){


  this.router.navigateByUrl('signIn');


 }

}
