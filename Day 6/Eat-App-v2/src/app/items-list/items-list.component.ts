import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  totalCount = 0;
  totalPrice = 0;
  items = [
    {
      id: 1,
      name: "Vegetables",
      type: true,
      price: 200.00,
      canBuy: true,
      imgPath: `../assets/veg.jpg`,
      description: "Veg is Always Yummy",
      ingredients: "Sunlight and Water",
      reviews: [
        {Review: "Excellent", Stars: 5},
        {Review: "First Class", Stars: 4}
      ]  
    },
    {
      id: 2,
      name: "Chicken",
      type: false,
      price: 100.00,
      canBuy: true,
      imgPath: "../assets/nonveg.jpg",
      description: "Non Veg is Yummy",
      ingredients: "Fodder",
      reviews: [
        {Review: "Exquisite", Stars: 4},
        {Review: "Can be better", Stars: 2}
      ]   
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  cart = {}
  
  incrementTotalCount(event){
   
    this.totalCount++;
    this.incrementTotalPrice(event)
    this.cart[event.returnItem.id] = event.returnItem
   
  }
  decrementTotalCount(event) {
  
    if(this.totalCount>0)
    {
      if(event.returnItem.qty == 0)
      {
        let x = event.returnItem.id
        delete this.cart[x]
        
      }
      this.totalCount--;
      this.decrementTotalPrice(event)
   
    }
  }
  incrementTotalPrice(event){
    // console.log(event.count)
    this.totalPrice = this.totalPrice + event.price;
    
  }
  decrementTotalPrice(event) {
    // console.log(event.count)
    this.totalPrice = this.totalPrice - event.price;
  }
  togCart = false
  toggleCart(event)
  {
    if(this.togCart == false)
      this.togCart = true
    else
      this.togCart = false
  }
}
