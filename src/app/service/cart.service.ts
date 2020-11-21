import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {



  cartList = [];
  address;
  totAmount;

  constructor(private cartDAO: CartService) {



   }


   addAddress(address) {


    this.address = address;

   }

   getAddress(){

    return this.address;
   }


   addToCart(book) {


    this.cartList.push(book);

   }





   getCart(){

    return this.cartList;
   }


   setTotalAmount(amount){
     this.totAmount = amount;
   }

   getTotalAmount(){

    return this.totAmount;
   }


   removeFromCart( value) {
    var idx = this.cartList.indexOf(value);
    if (idx !== -1) {
      this.cartList.splice(idx, 1);
    }
  }

}
