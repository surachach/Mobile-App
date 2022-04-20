import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CartModalPage } from '../pages/cart-modal/cart-modal.page';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  cart = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;

  @ViewChild('cart',{static: false, read: ElementRef})fab: ElementRef;

  constructor(private cartServce: CartService, private modalCtrl: ModalController) {}
  
  ngOnInit() {
    this.products = this.cartServce.getProducts();
    this.cart = this.cartServce.getCart();
    this.cartItemCount = this.cartServce.getCartItemCount();
  }

  addToCart(product) {
    this.animateCSS('tada')
    this.cartServce.addProduct(product);
  }

  async openCart() {
     this.animateCSS('bounceOutLeft');

     let modal = await this.modalCtrl.create({
       component: CartModalPage,
       cssClass: 'cart-modal'
     });
    modal.onWillDismiss().then(() => {
      this.animateCSS('bounceInleft');
    });

     modal.present(); 
  }

  animateCSS(animationName, KeepAnimated = false) {
    const node = this.fab.nativeElement;
    node.classList.add('animated',animationName)
     //https://
    function handleAnimationEnd() {
      if (!KeepAnimated) {
        node.classList.remove('animated',animationName);
      }
      node.removeEventListener('animationend', handleAnimationEnd)
    }
      node.addEventListener('animationend', handleAnimationEnd)
    }

}
