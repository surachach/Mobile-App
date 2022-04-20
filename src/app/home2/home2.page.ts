import { Component, OnInit } from '@angular/core';
import { CartModalPage } from '../pages/cart-modal/cart-modal.page';
import { CartService , Product } from '../services/cart.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})
export class Home2Page implements OnInit 


{
  cart:Product[] =[];
  expenseRecord : {

    name : string;
    address : string;
    birth : string;
    email : string;
    tel : number; 
 
  }
  

  constructor(private modalCtrl: ModalController,private exservice : CartService,private router:Router) {
    
  }

  
  gotoPage(pageName: any){
    this.router.navigate([pageName]);
  }
  
  ngOnInit() {
    this.cart = this.exservice.getCart();
  }

gotoBillPage(){
  this.router.navigate(['bill']);
}

decreaseCarItem(product) {
  this.exservice.decreaseProduct(product);
}
increaseCartItem(product) {
  this.exservice.addProduct(product);
}

removeCartItem(product) {
  this.exservice.removeProduct(product);
}

getTotal() {
  [{print: 5, amount: 2}]
  return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
}

close() {
  this.modalCtrl.dismiss();
}


  option = {
     slidesPerView: 1.5,
     centeredSlides: true,
     loop: true,
     spaceBetween: 10,
  }
}
