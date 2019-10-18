import { AddBookService } from './../../service/add-book.service';
import { Component, OnInit } from '@angular/core';
import { async } from 'q';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  bookList;

  bookArryList = [];

  image;

  bookSearch;


  bookItem;

  constructor(private addService: AddBookService) {

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

  }



}
