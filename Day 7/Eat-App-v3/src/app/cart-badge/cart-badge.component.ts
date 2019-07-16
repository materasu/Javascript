import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-badge',
  templateUrl: './cart-badge.component.html',
  styleUrls: ['./cart-badge.component.css']
})
export class CartBadgeComponent implements OnInit {

  @Input() value; 
  constructor(private cartService: CartService) {

   }

  ngOnInit() {
    this.cartService.getCartStream()
    .subscribe(e =>{this.value = e.cartQty})
  }

}
