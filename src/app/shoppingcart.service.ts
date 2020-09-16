import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingcartService {

  shoppingDict = {};
  isAdd(title, price) {
    if (!this.shoppingDict[title]) {
      this.shoppingDict[title] = {'price': price, 'nums': 0};
    }
    this.shoppingDict[title]['nums'] += 1;
    // console.log(this.shoppingDict);
    return this.shoppingDict;
  }

  isSub(title, price) {
    if (this.shoppingDict[title]) {
      if (this.shoppingDict[title]['nums'] > 0) {
        this.shoppingDict[title]['nums'] -= 1;
      } else {
        this.shoppingDict[title]['nums'] = 0;
      }
    }

    // console.log(this.shoppingDict);
    return this.shoppingDict;
  }

}
