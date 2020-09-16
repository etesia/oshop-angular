import { ShoppingcartService } from './../shoppingcart.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  checkoutObj;
  checkoutListKeys;
  checkoutList;
  totalMoney = 0;
  totalItems;
  constructor(public cartService: ShoppingcartService) {}

  ngOnInit () {

    // build an arry for object(that is cartService.shoppingDict)
    this.checkoutObj = this.cartService.shoppingDict;
    // Step 1. Get all the object keys.
    this.checkoutListKeys = Object.keys(this.checkoutObj);
    // Step 2. Create an empty array.
    this.checkoutList = [];
    // Step 3. Iterate throw all keys.
    for (let index = 0; index < this.checkoutListKeys.length; index++) {
      this.checkoutList.push(this.checkoutObj[this.checkoutListKeys[index]]);
      console.log(this.checkoutList);
    this.checkTotalMoneyTotleItems ();

    }
  }


  isAdd(productName) {
    // console.log(productName);
    // console.log(this.cartService.shoppingDict[productName]['nums']);
    if (this.cartService.shoppingDict[productName]['nums'] < 99) {
      this.cartService.shoppingDict[productName]['nums'] += 1;
    }
    this.checkTotalMoneyTotleItems ();

  }


  isSub(productName) {
    // console.log(productName);
    // console.log(this.cartService.shoppingDict[productName]['nums']);
    if (this.cartService.shoppingDict[productName]['nums'] > 1) {
      this.cartService.shoppingDict[productName]['nums'] -= 1;
    }
    this.checkTotalMoneyTotleItems ();
  }


  checkTotalMoneyTotleItems () {
    this.totalItems = 0;
    this.totalMoney = 0;
    for (let index = 0; index < this.checkoutList.length; index++) {
      this.totalMoney += this.checkoutList[index]['price'] * this.checkoutList[index]['nums'];
      this.totalItems += this.checkoutList[index]['nums'];
    }
    console.log(this.checkoutList);
  }

  clearCart() {
    this.checkoutList = [];
    this.totalMoney = 0;
  }


}



