import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartService, Product } from 'src/app/services/cart.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage implements OnInit {

  cart: Product[] =[];

  constructor(private cartService: CartService, private modalCtrl: ModalController,
              
    ) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }
  decreaseCarItem(product) {
    this.cartService.decreaseProduct(product);
  }
  increaseCartItem(product) {
    this.cartService.addProduct(product);
  }

  removeCartItem(product) {
    this.cartService.removeProduct(product);
  }

  getTotal() {
  
    return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
  }

  close() {
    this.modalCtrl.dismiss();
  }

  checkout() {
    
  }
}
