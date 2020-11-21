import { CartService } from './../../service/cart.service';

import { ContentItemService } from 'src/app/service/content-item.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  contentList = [];
  teacher;
  constructor(private router: Router, private contentDao: ContentItemService, private cartDao: CartService) {



  }

  ngOnInit() {


    this.getContent();



  }

  back(){


    this.router.navigateByUrl('detail-menu/books');


  }


  getContent(){
    this.contentDao.getContent().subscribe(data => {
      this.contentList = data.map(e => {
        return{

          key: e.payload.doc.id,
          ... e.payload.doc.data() as ContentItem
        } as ContentItem
      })

    })

    console.log('content List')
  }


  addToCart(content){

  this.cartDao.addToCart(content);

  alert("Content Added To Cart");

  }




}
