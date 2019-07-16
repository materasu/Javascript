import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-items-cart',
  templateUrl: './items-cart.component.html',
  styleUrls: ['./items-cart.component.css']
})
export class ItemsCartComponent implements OnInit {
 
  @Input("val") qtyCount;
  @Input("cartVal") cart;
  @Output() boom = new EventEmitter();
  @Output() boom1 = new EventEmitter();
  // let x = qtyCount
  constructor() { }
  cartEmpty = null
  carts = []
  ngOnInit() { 
    
  }
  ngDoCheck() {
    this.carts = []
    if(this.qtyCount > 0){
      this.cartEmpty = false
    }
    else{
      this.cartEmpty = true
    }
    for (let i in this.cart) {
      this.carts.push(this.cart[i])
    }
  }

  incrementCount(item){
    console.log(item)
    item.qty ++;
    let retIt = {
      id: item.id,
      name: item.name,
      qty: item.qty,
      totalPrice: item.totalPrice
    }
    this.boom.emit({returnItem: retIt})
  }
  decrementCount(item){
    // console.log(item)
    item.qty--;
    let retIt = {
      id: item.id,
      name: item.name,
      qty: item.qty,
      totalPrice: item.qty*item.price
    }
    this.boom1.emit({returnItem: retIt})
  }


  

}
