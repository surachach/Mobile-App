import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  id :number;
  name: string;
  price: number;
  amount: number;
  c: any;
} 
@Injectable({
  providedIn: 'root'
})
export class CartService {
  data: Product[] = [
    { id: 1,c: "https://www.movearound-journey.com/wp-content/uploads/2018/04/%E0%B8%88%E0%B8%B4%E0%B9%89%E0%B8%A1%E0%B8%88%E0%B8%B8%E0%B9%88%E0%B8%A1-8.jpg", name: 'จิ้มจุ่ม', price: 200, amount: 1 },
    { id: 2,c: "https://s359.kapook.com/pagebuilder/11b09c57-a05c-4ed7-b932-d741fceafd15.jpg", name: 'ลาบ', price:  50, amount: 1 },
    { id: 3,c: "https://img.kapook.com/u/2016/surauch/cook1/TS1.jpg", name: 'ต้มแซ่บ', price: 60, amount: 1 },
    { id: 4,c: "https://mpics.mgronline.com/pics/Images/560000003554201.JPEG",name: 'ส้มตำ', price: 30, amount: 1 },
    { id: 5,c: "http://i0.wp.com/www.thaismescenter.com/wp-content/uploads/2019/05/1010.jpg",name: 'ไก่ทอด', price: 60, amount: 1 },
    { id: 6,c: "https://joegraff.files.wordpress.com/2013/06/stickyrice_traditional.jpg",name: 'ข้าวเหนียว', price: 10, amount: 1 },
    { id: 7,c: "https://backend.tops.co.th/media//catalog/product/8/8/8851959141014_e17-01-2019.jpg",name: 'โค้ก', price: 12, amount: 1 },
    
  ];
 
  private cart = [];
  private cartItemCount = new BehaviorSubject(0);
  constructor() { }

  getProducts() {
    return this.data;
  }
  getCart() {
    return this.cart;
  }
  getCartItemCount(){
    return this.cartItemCount;
  }

  addProduct(product){
    let added = false;
    for (let p of this.cart) {
      if (p.id ===product.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
      if (!added) {
        this.cart.push(product);
      }
      this.cartItemCount.next(this.cartItemCount.value + 1);
    } 
 
  decreaseProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.amount -= 1;
        if (p.amount ==0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }

  removeProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
          this.cart.splice(index, 1);
        }
      }
    }
  
}
