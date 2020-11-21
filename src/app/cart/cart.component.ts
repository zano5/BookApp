import { CartService } from './../service/cart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


  carList = [];
  totAmount = 0;

  constructor(private cartDao: CartService, private router: Router) {





  }

  ngOnInit() {


    this.carList = this.cartDao.getCart();


    for(let cart of this.carList){

      this.totAmount+= cart.price;
    }



    this.cartDao.setTotalAmount(this.totAmount);


  }








  back() {


    this.router.navigateByUrl('detail-menu/books')

  }



  goLocation() {


      if(this.totAmount > 0){
    this.router.navigateByUrl("location");
      }else{


        alert("You Do Not Have Any Items In The Cart");
      }



}

remove(value){



  this.cartDao.removeFromCart(value);

  this.carList = [];
  this.totAmount = 0;0

  this.carList = this.cartDao.getCart();


  console.log(this.carList);

  if(this.carList.length > 0){

  for(let cart of this.carList) {

    this.totAmount+= cart.price;

    console.log("cart total",this.totAmount);
  }

}else{

  this.totAmount = 0;
}


}


}
