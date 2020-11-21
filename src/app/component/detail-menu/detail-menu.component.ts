import { PaymentHistoryService } from './../../service/payment-history.service';
import { CartService } from './../../service/cart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-menu',
  templateUrl: './detail-menu.component.html',
  styleUrls: ['./detail-menu.component.scss']
})
export class DetailMenuComponent implements OnInit {

    count;

  constructor(private router: Router, private cartDao: CartService, private paymentDao: PaymentHistoryService) {


    this.count = this.cartDao.getCart().length;


   }

  ngOnInit() {


    this.count = this.cartDao.getCart().length;
  }


  ngAfterViewInit(){

    this.count = this.cartDao.getCart().length;

  }


  goToCart(){

    this.router.navigateByUrl('cart');
  }


  signOut() {

    this.router.navigateByUrl('');

  }

}
