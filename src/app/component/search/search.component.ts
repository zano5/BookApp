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


  constructor(private route: ActivatedRoute, private router: Router, private addBookService: AddBookService) {

  }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {



        this.data = params.search;


    });



    console.log(this.data);
    this.addBookService.getBooksSearch(this.data).subscribe(data => {


      this.bookList = data.map( e => {





        return{
          key: e.payload.doc.id,
          ...e.payload.doc.data()
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

    this.router.navigateByUrl('detail-menu/books');

  }

  getImage(image) {






    return this.addBookService.retreiveImage(image);


 }

}
