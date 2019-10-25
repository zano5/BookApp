import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddBookService } from 'src/app/service/add-book.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-n-lsearch',
  templateUrl: './n-lsearch.component.html',
  styleUrls: ['./n-lsearch.component.scss']
})
export class NLSearchComponent implements OnInit {

  image;
  data;
  bookList = [];
  bookArryList = [];
  bookItem;

  student;

  stud;

  // tslint:disable-next-line:max-line-length
  constructor(private route: ActivatedRoute, private router: Router, private addBookService: AddBookService, private studentInfo: UserService) {



  }

  ngOnInit() {


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

    if (this.stud) {


      this.router.navigateByUrl('detail-menu/books');
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

}

}
