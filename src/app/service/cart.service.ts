import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {



  cartList = [];

  constructor(private cartDAO: CartService) {



   }



   addToCart(book) {


    this.cartList.push(book);

   }


   removeFromCart() {


   // this.

   }

}
