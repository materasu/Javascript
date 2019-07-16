import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Eat It - Version 1';
  currentTab = 1;
  items = [
    {
      id: 1,
      currentTab: 1,
      name: "Veg",
      price: 200.00,
      canBuy: true,
      imgPath: `/assets/veg.jpg`,
      description: "Veg is Always Yummy"  
    },
    {
      id: 2,
      currentTab: 1,
      name: "Non Veg",
      price: 100.00,
      canBuy: true,
      imgPath: "/assets/nonveg.jpg",
      description: "Non Veg is Yummy" 
    }
  ]
  isTabSelected(tabIndex) {
    return this.currentTab == tabIndex;
  }
  changeTab(event, tabIndex) {
    event.preventDefault();
    this.currentTab = tabIndex;
  }
}

