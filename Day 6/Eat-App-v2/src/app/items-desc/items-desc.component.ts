import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-items-desc',
  templateUrl: './items-desc.component.html',
  styleUrls: ['./items-desc.component.css']
})
export class ItemsDescComponent implements OnInit {
  @Input("value") item;
  currentTab = 1
  constructor() { }

  @Output() boom = new EventEmitter();
  @Output() boom1 = new EventEmitter();

  ngOnInit() {
  }
  isTabSelected(tabIndex) {
    return this.currentTab == tabIndex;
  }
  changeTab(event, tabIndex) {
    event.preventDefault();
    this.currentTab = tabIndex;
  }
  count = 0;
  incrementCount(event) {
    // console.log(event)
    this.count++;
    let retIt = {
      id: this.item.id,
      name: this.item.name,
      price: this.item.price,
      qty: this.count,
      totalPrice: this.count*this.item.price
    }
    this.boom.emit({ count: this.count, price: this.item.price, returnItem:retIt})
  }
  decrementCount(event) {
    // console.dir(event)
    if(this.count > 0)
    {
      this.count--;
      let retIt = {
        id: this.item.id,
        name: this.item.name,
        qty: this.count,
        totalPrice: this.count*this.item.price
      }
      this.boom1.emit({ count: this.count, price: this.item.price, returnItem:retIt})
    }
  }
}
