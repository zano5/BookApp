import { ContentService } from './../../service/content.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  bookName;

  content = {
    email: '',
    name: '',
    message: ''
  };


  constructor(private router: Router,  private contentDao: ContentService) { }

  ngOnInit() {

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

}
